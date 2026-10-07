const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { test } = require('node:test');
const Vue = require('vue');
const { parse, compileScript } = require('@vue/compiler-sfc');
const { renderToString } = require('@vue/server-renderer');

const filename = path.resolve(__dirname, '../.vuepress/components/LanguageTabs.vue');
const { descriptor, errors } = parse(fs.readFileSync(filename, 'utf8'), { filename });

test('tab layout does not use the theme code-block class prefix', () => {
    assert.deepEqual(errors, []);
    for (const match of descriptor.template.content.matchAll(/\bclass="([^"]*)"/g)) {
        assert.ok(!match[1].includes('language-'), `Reserved code-block class: ${match[1]}`);
    }
});

test('only actual Python and C++ code blocks match the copy plugin selector', async () => {
    const compiled = compileScript(descriptor, {
        id: 'doc-tabs-test', inlineTemplate: true, templateOptions: { ssr: true },
    });
    let code = compiled.content
        .replace(/import \{ useRoute \} from 'vue-router';/, 'const useRoute = () => globalThis.__tabsTestRoute;')
        .replace(/import \{ useRouteLocale \} from '@vuepress\/client';/, 'const useRouteLocale = () => globalThis.__tabsTestLocale;')
        .replace(/import \{ useDocLanguage \} from '\.\.\/utils\/useDocLanguage.js';/, 'const useDocLanguage = () => globalThis.__tabsTestSelection;')
        .replace(/from '\.\.\/utils\/doc-language.mjs'/, `from ${JSON.stringify(pathToFileURL(path.resolve(__dirname, '../.vuepress/utils/doc-language.mjs')).href)}`)
        .replace(/from (["'])(vue(?:\/server-renderer)?)\1/g,
            (_, quote, id) => `from ${JSON.stringify(pathToFileURL(require.resolve(id)).href)}`);
    const { default: component } = await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);
    const slot = (language) => () => [
        Vue.h('h2', `${language} example`),
        Vue.h('p', 'Normal documentation text'),
        Vue.h('div', { class: `language-${language}` }, [
            Vue.h('pre', [Vue.h('code', language === 'python' ? 'print("Hello")' : 'qDebug() << "Hello";')]),
        ]),
    ];
    try {
        for (const hash of ['', '#内置图标', '#c-内置图标与原生-qt-控件']) {
            globalThis.__tabsTestRoute = Vue.reactive({ path: '/zh/pages/icon/', hash });
            globalThis.__tabsTestLocale = Vue.ref('/zh/');
            globalThis.__tabsTestSelection = Vue.shallowReactive({ path: null, language: 'python', owner: null });
            const html = await renderToString(Vue.createSSRApp({
                render: () => Vue.h(component, null, { python: slot('python'), cpp: slot('cpp') }),
            }));
            // This is the same predicate used by div[class*="language-"] in the theme and copy plugin.
            const matchingDivs = [...html.matchAll(/<div\b[^>]*\bclass="([^"]*)"/g)]
                .map(match => match[1]).filter(className => className.includes('language-'));
            assert.deepEqual(matchingDivs, ['language-python', 'language-cpp']);
            assert.ok(html.includes('Normal documentation text'));
            const active = hash.startsWith('#c-') ? 'cpp' : 'python';
            assert.match(html, new RegExp(`id="language-tab-${active}"[^>]*aria-selected="true"`));
            const hidden = active === 'cpp' ? 'python' : 'cpp';
            assert.match(html, new RegExp(`style="display:none;"[^>]*id="language-panel-${hidden}"`));
        }
    } finally {
        delete globalThis.__tabsTestRoute;
        delete globalThis.__tabsTestLocale;
        delete globalThis.__tabsTestSelection;
    }
});

test('scroll hashes cannot change language, but page-entry deep links and tab buttons can', async () => {
    const helpers = await import('../.vuepress/utils/doc-language.mjs');
    const setup = compileScript(descriptor, { id: 'scroll-test' }).content
        .replace(/import \{ computed, onUnmounted, ref, watch \} from 'vue';/, 'const { computed, ref, watch } = Vue; const onUnmounted = fn => cleanup.push(fn);')
        .replace(/import \{ useRoute \} from 'vue-router';/, 'const useRoute = () => route;')
        .replace(/import \{ useRouteLocale \} from '@vuepress\/client';/, 'const useRouteLocale = () => Vue.ref("/zh/");')
        .replace(/import \{ activateDocLanguage, releaseDocLanguage \} from '\.\.\/utils\/doc-language.mjs';/, 'const { activateDocLanguage, releaseDocLanguage } = helpers;')
        .replace(/import \{ useDocLanguage \} from '\.\.\/utils\/useDocLanguage.js';/, 'const useDocLanguage = () => selection;')
        .replace('export default', 'return');
    const route = Vue.reactive({ path: '/zh/pages/theme/', hash: '#切换主题' });
    const selection = Vue.shallowReactive(helpers.createDocLanguageState());
    const scope = Vue.effectScope();
    const cleanup = [];
    const bindings = scope.run(() => new Function('Vue', 'route', 'selection', 'helpers', 'cleanup', setup)
        (Vue, route, selection, helpers, cleanup).setup({}, { expose() {} }));
    try {
        assert.equal(bindings.activeTab.value, 'python');
        route.hash = '#c-切换主题与主题色'; await Vue.nextTick();
        assert.equal(bindings.activeTab.value, 'python');
        bindings.activeTab.value = 'cpp';
        for (const hash of ['#切换主题', '', '#c-字体']) {
            route.hash = hash; await Vue.nextTick();
            assert.equal(bindings.activeTab.value, 'cpp');
        }
        let focused = -1;
        bindings.buttons.value = [{ focus() { focused = 0; } }, { focus() { focused = 1; } }];
        for (const [key, index, expected] of [['ArrowLeft', 1, 0], ['ArrowRight', 0, 1], ['Home', 1, 0], ['End', 0, 1]]) {
            let prevented = false;
            bindings.navigateTabs({ key, preventDefault() { prevented = true; } }, index);
            assert.equal(focused, expected);
            assert.ok(prevented);
            assert.equal(bindings.activeTab.value, expected === 0 ? 'python' : 'cpp');
        }
        route.hash = '#c-内置图标'; route.path = '/zh/pages/icon/'; await Vue.nextTick();
        assert.equal(selection.path, '/zh/pages/icon/');
        assert.equal(bindings.activeTab.value, 'cpp');
        route.hash = '#内置图标'; route.path = '/pages/icon/'; await Vue.nextTick();
        assert.equal(bindings.activeTab.value, 'python');
    } finally {
        cleanup.forEach(fn => fn()); scope.stop();
    }
    assert.equal(selection.path, null);
});

test('catalog filtering retains only the selected language and its nested headings', async () => {
    const { createDocLanguageState, activateDocLanguage, releaseDocLanguage, filterDocCatalog } = await import('../.vuepress/utils/doc-language.mjs');
    const items = [
        { text: '样式表', link: '#样式表', children: [{ text: '跟随系统主题', link: '#跟随系统主题' }] },
        { text: 'C++ 自定义样式', link: '#c-自定义样式', children: [{ text: 'C++ QSS', link: '#c-qss' }] },
    ];
    assert.deepEqual(filterDocCatalog(items, 'python').map(item => item.link), ['#样式表']);
    assert.deepEqual(filterDocCatalog(items, 'cpp').map(item => item.link), ['#c-自定义样式']);
    assert.equal(filterDocCatalog(items, 'python')[0].children[0].link, '#跟随系统主题');
    assert.equal(filterDocCatalog(items, 'cpp')[0].children[0].link, '#c-qss');
    assert.equal(items.length, 2); // Do not mutate the theme's source catalog.
    const state = createDocLanguageState();
    const owner = Symbol();
    activateDocLanguage(state, '/zh/pages/theme/', '#c-字体', owner);
    releaseDocLanguage(state, Symbol()); assert.equal(state.path, '/zh/pages/theme/');
    releaseDocLanguage(state, owner); assert.equal(state.path, null);
    assert.notEqual(createDocLanguageState(), createDocLanguageState());
});

test('the actual catalog follows tab selection and leaves other pages unchanged', async () => {
    const file = path.resolve(__dirname, '../.vuepress/theme/DocCatalog.vue');
    const parsed = parse(fs.readFileSync(file, 'utf8'), { filename: file });
    assert.deepEqual(parsed.errors, []);
    const compiled = compileScript(parsed.descriptor, {
        id: 'catalog-test', inlineTemplate: true, templateOptions: { ssr: true },
    });
    let code = compiled.content
        .replace(/import \{ useRoute \} from 'vue-router';/, 'const useRoute = () => globalThis.__catalogTestRoute;')
        .replace(/import \{ usePageCatalog, useThemeLocaleData \} from [^;]+;/, 'const usePageCatalog = () => globalThis.__catalogTestItems; const useThemeLocaleData = () => Vue.ref({});')
        .replace(/import \{ CatalogItem \} from [^;]+;/, 'const CatalogItem = globalThis.__catalogTestItem;')
        .replace(/import \{ useDocLanguage \} from '\.\.\/utils\/useDocLanguage.js';/, 'const useDocLanguage = () => globalThis.__catalogTestSelection;')
        .replace(/from '\.\.\/utils\/doc-language.mjs'/, `from ${JSON.stringify(pathToFileURL(path.resolve(__dirname, '../.vuepress/utils/doc-language.mjs')).href)}`)
        .replace(/from (["'])(vue(?:\/server-renderer)?)\1/g,
            (_, quote, id) => `from ${JSON.stringify(pathToFileURL(require.resolve(id)).href)}`);
    code = `import * as Vue from ${JSON.stringify(pathToFileURL(require.resolve('vue')).href)};\n${code}`;
    globalThis.__catalogTestRoute = Vue.reactive({ path: '/zh/pages/theme/' });
    globalThis.__catalogTestItems = Vue.ref([
        { text: '切换主题', link: '#切换主题' },
        { text: 'C++ 切换主题', link: '#c-切换主题' },
    ]);
    globalThis.__catalogTestSelection = Vue.shallowReactive({ path: '/zh/pages/theme/', language: 'python' });
    globalThis.__catalogTestItem = { props: ['item'], render() { return Vue.h('li', [Vue.h('a', { class: 'page-catalog-item', href: this.item.link }, this.item.text)]); } };
    try {
        const { default: component } = await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);
        const render = () => renderToString(Vue.createSSRApp(component));
        const python = await render();
        assert.ok(python.includes('href="#切换主题"')); assert.ok(!python.includes('href="#c-切换主题"'));
        globalThis.__catalogTestSelection.language = 'cpp';
        const cpp = await render();
        assert.ok(cpp.includes('href="#c-切换主题"')); assert.ok(!cpp.includes('href="#切换主题"'));
        globalThis.__catalogTestRoute.path = '/zh/pages/about/';
        const other = await render();
        assert.ok(other.includes('href="#切换主题"')); assert.ok(other.includes('href="#c-切换主题"'));
    } finally {
        for (const key of ['__catalogTestRoute', '__catalogTestItems', '__catalogTestSelection', '__catalogTestItem']) delete globalThis[key];
    }
    assert.match(fs.readFileSync(path.resolve(__dirname, '../.vuepress/config.ts'), 'utf8'), /'\.\.\/Catalog.vue':.*DocCatalog.vue/);
});
