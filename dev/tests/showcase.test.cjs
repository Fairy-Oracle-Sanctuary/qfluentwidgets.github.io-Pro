const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { test } = require('node:test');
const Vue = require('vue');
const { parse, compileTemplate } = require('@vue/compiler-sfc');
const { renderToString } = require('@vue/server-renderer');

const root = path.resolve(__dirname, '../.vuepress');
const importSource = source => import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

test('showcases are enabled, reviews stay hidden, and only our two projects are displayed', async () => {
    const { contentVisibility } = await importSource(read('config/contentVisibility.js'));
    assert.equal(contentVisibility.showcases, true);
    assert.equal(contentVisibility.reviews, false);
    for (const locale of ['zh', 'en']) {
        const { showcases, upstreamShowcases } = await importSource(read(`config/${locale}/showcases.js`));
        assert.deepEqual(showcases.data.map(item => item.name), ['Fairy-Kekkai-Workshop', 'Easy-FFmpeg']);
        assert.equal(upstreamShowcases.data.length, 15);
        for (const item of showcases.data) {
            const websites = {
                'Fairy-Kekkai-Workshop': 'https://fkw.ora-san.org/',
                'Easy-FFmpeg': 'https://easypeg.ora-san.org/',
            };
            assert.equal(item.url, websites[item.name]);
            assert.equal(item.cover, `/img/showcase/${item.name}.png`);
            const image = fs.readFileSync(path.join(root, 'public', item.cover));
            assert.equal(image.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
            assert.ok(image.readUInt32BE(16) > 0 && image.readUInt32BE(20) > 0);
        }
    }
});

test('project cards render accessible official website links and local screenshot previews', async () => {
    const filename = path.join(root, 'components/ShowcaseCard.vue');
    const { descriptor, errors } = parse(read('components/ShowcaseCard.vue'), { filename });
    assert.deepEqual(errors, []);
    const compiled = compileTemplate({ source: descriptor.template.content, filename, id: 'showcase-test', ssr: true, ssrCssVars: descriptor.cssVars });
    assert.deepEqual(compiled.errors, []);
    const script = descriptor.script.content.replace('export default', 'const component =');
    const render = compiled.code.replace(/from (["'])(vue(?:\/server-renderer)?)\1/g,
        (_, quote, id) => `from ${JSON.stringify(pathToFileURL(require.resolve(id)).href)}`);
    const { default: component } = await importSource(`${script}\n${render}\ncomponent.ssrRender = ssrRender; export default component;`);
    for (const locale of ['zh', 'en']) {
        const { showcases } = await importSource(read(`config/${locale}/showcases.js`));
        for (const item of showcases.data) {
            const html = await renderToString(Vue.createSSRApp(component, item));
            assert.ok(html.startsWith('<a class="showcase-card"'));
            assert.ok(html.includes(`href="${item.url}"`));
            assert.ok(html.includes('rel="noopener noreferrer"'));
            assert.ok(html.includes(`src="${item.cover}"`));
            assert.ok(html.includes(`alt="${item.name}"`));
            assert.ok(html.includes(item.description));
        }
    }
    assert.ok(descriptor.styles[0].content.includes('object-contain'));
    const showcase = parse(read('components/Showcase.vue')).descriptor;
    const template = compileTemplate({ source: showcase.template.content, filename: 'Showcase.vue', id: 'showcase-page' });
    assert.deepEqual(template.errors, []);
    assert.ok(!showcase.styles[0].content.includes('lg:grid-cols-3'));
});
