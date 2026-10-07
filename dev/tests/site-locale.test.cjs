const assert = require('node:assert/strict');
const { test } = require('node:test');
const { createRouter, createMemoryHistory } = require('vue-router');

const load = () => import('../.vuepress/utils/site-locale.mjs');
const paths = ['/', '/zh/', '/pages/faq/', '/zh/pages/faq/', '/pages/theme/', '/zh/pages/theme/'];
async function makeRouter(entry, available = paths) {
    const router = createRouter({
        history: createMemoryHistory(),
        routes: available.map(path => ({ path, component: { render() {} } })),
    });
    await router.push(entry);
    await router.isReady();
    return router;
}
function memoryStorage(preference) {
    const values = new Map(preference ? [['fos-docs:site-locale', preference]] : []);
    return { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) };
}

test('browser language uses the primary preference and recognizes Chinese variants', async () => {
    const { detectBrowserLocale } = await load();
    for (const language of ['zh', 'zh-CN', 'zh-TW', 'zh-Hant', 'zh-SG', 'ZH_cn']) {
        assert.equal(detectBrowserLocale({ languages: [language, 'en-US'] }), 'zh');
    }
    for (const language of ['en-US', 'ja-JP', 'de-DE']) {
        assert.equal(detectBrowserLocale({ languages: [language, 'zh-CN'] }), 'en');
    }
    assert.equal(detectBrowserLocale({ language: 'zh-CN' }), 'zh');
    assert.equal(detectBrowserLocale(), 'en');
});

test('page translation preserves valid routes and tolerates trailing slashes', async () => {
    const { translatedPath, localeFromPath } = await load();
    const routes = paths.map(path => ({ path }));
    assert.equal(translatedPath('/', 'zh', routes), '/zh/');
    assert.equal(translatedPath('/zh', 'en', routes), '/');
    assert.equal(translatedPath('/pages/faq', 'zh', routes), '/zh/pages/faq/');
    assert.equal(translatedPath('/zh/pages/theme/', 'en', routes), '/pages/theme/');
    assert.equal(translatedPath('/missing/', 'zh', routes), null);
    assert.equal(localeFromPath('/zh-example/'), 'en');
});

test('initial detection replaces the current page once and retains query parameters', async () => {
    const { createSiteLocaleController, siteLocaleStorageKey } = await load();
    const router = await makeRouter('/pages/faq/?source=team');
    const storage = memoryStorage();
    const controller = createSiteLocaleController(router, { browser: { language: 'zh-CN' }, getStorage: () => storage });
    try {
        await controller.start();
        assert.equal(router.currentRoute.value.path, '/zh/pages/faq/');
        assert.deepEqual(router.currentRoute.value.query, { source: 'team' });
        assert.equal(storage.getItem(siteLocaleStorageKey), null);
        await router.push('/pages/theme/');
        assert.equal(storage.getItem(siteLocaleStorageKey), 'en');
        await controller.start();
        assert.equal(router.currentRoute.value.path, '/pages/theme/');
    } finally { controller.stop(); }
});

test('English or unsupported browser languages select English from a Chinese entry', async () => {
    const { createSiteLocaleController } = await load();
    for (const language of ['en-GB', 'ja-JP']) {
        const router = await makeRouter('/zh/pages/theme/');
        const controller = createSiteLocaleController(router, { browser: { language } });
        try { await controller.start(); assert.equal(router.currentRoute.value.path, '/pages/theme/'); }
        finally { controller.stop(); }
    }
});

test('saved manual choice wins over browser detection on subsequent visits', async () => {
    const { createSiteLocaleController, siteLocaleStorageKey } = await load();
    const storage = memoryStorage();
    const first = await makeRouter('/');
    const initial = createSiteLocaleController(first, { browser: { language: 'zh-CN' }, getStorage: () => storage });
    await initial.start();
    assert.equal(first.currentRoute.value.path, '/zh/');
    await first.push('/');
    assert.equal(storage.getItem(siteLocaleStorageKey), 'en');
    await first.replace({ hash: '#c-example' });
    assert.equal(storage.getItem(siteLocaleStorageKey), 'en');
    assert.equal(first.currentRoute.value.path, '/');
    initial.stop();
    const second = await makeRouter('/zh/pages/faq/');
    const returning = createSiteLocaleController(second, { browser: { language: 'zh-CN' }, getStorage: () => storage });
    try { await returning.start(); assert.equal(second.currentRoute.value.path, '/pages/faq/'); }
    finally { returning.stop(); }
});

test('explicit section links and pages without translations are not redirected', async () => {
    const { createSiteLocaleController } = await load();
    const linked = await makeRouter('/zh/pages/theme/#c-字体');
    const controller = createSiteLocaleController(linked, { browser: { language: 'en-US' } });
    try {
        await controller.start();
        assert.equal(linked.currentRoute.value.path, '/zh/pages/theme/');
        assert.equal(linked.currentRoute.value.hash, '#c-字体');
    } finally { controller.stop(); }
    const single = await makeRouter('/pages/faq/', ['/pages/faq/']);
    const untranslated = createSiteLocaleController(single, { browser: { language: 'zh-CN' } });
    try { await untranslated.start(); assert.equal(single.currentRoute.value.path, '/pages/faq/'); }
    finally { untranslated.stop(); }
});

test('unavailable storage and invalid preferences never break navigation', async () => {
    const { createSiteLocaleController } = await load();
    for (const getStorage of [() => { throw new Error('Blocked'); }, () => memoryStorage('invalid')]) {
        const router = await makeRouter('/');
        const controller = createSiteLocaleController(router, { browser: { language: 'zh-CN' }, getStorage });
        try {
            await controller.start(); assert.equal(router.currentRoute.value.path, '/zh/');
            await router.push('/'); assert.equal(router.currentRoute.value.path, '/');
        } finally { controller.stop(); }
    }
});

test('failed navigation cannot overwrite a saved preference, and stop removes listeners', async () => {
    const { createSiteLocaleController, siteLocaleStorageKey } = await load();
    const router = await makeRouter('/');
    const storage = memoryStorage('en');
    const controller = createSiteLocaleController(router, { getStorage: () => storage });
    await controller.start();
    const removeGuard = router.beforeEach(to => to.path === '/zh/' ? false : undefined);
    await router.push('/zh/');
    assert.equal(storage.getItem(siteLocaleStorageKey), 'en');
    removeGuard(); controller.stop();
    await router.push('/zh/');
    assert.equal(storage.getItem(siteLocaleStorageKey), 'en');
});
