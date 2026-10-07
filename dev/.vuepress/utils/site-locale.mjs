export const siteLocaleStorageKey = 'fos-docs:site-locale';

export function localeFromPath(path) {
    return path === '/zh' || path.startsWith('/zh/') ? 'zh' : 'en';
}

export function detectBrowserLocale(browser = {}) {
    const language = browser.languages?.[0] || browser.language || 'en';
    return /^zh(?:-|_|$)/i.test(language) ? 'zh' : 'en';
}

export function translatedPath(path, locale, routes) {
    const suffix = localeFromPath(path) === 'zh' ? path.slice(3) || '/' : path;
    const target = locale === 'zh' ? `/zh${suffix}` : suffix;
    const normalized = value => value.replace(/\/$/, '') || '/';
    return routes.find(route => normalized(route.path) === normalized(target))?.path ?? null;
}

// Browser APIs are injected so SSR never reads navigator or localStorage.
export function createSiteLocaleController(router, { browser = {}, getStorage = () => null } = {}) {
    let started = false;
    let stopped = false;
    let removeNavigationHook;

    const readPreference = () => {
        try {
            const value = getStorage()?.getItem(siteLocaleStorageKey);
            return value === 'zh' || value === 'en' ? value : null;
        } catch { return null; } // Storage may be blocked or unavailable.
    };
    const savePreference = locale => {
        try { getStorage()?.setItem(siteLocaleStorageKey, locale); } catch { /* Navigation still works. */ }
    };

    return {
        async start() {
            if (started || stopped) return;
            started = true;
            await router.isReady();
            if (stopped) return;
            const route = router.currentRoute.value;
            const locale = readPreference() || detectBrowserLocale(browser);
            const target = translatedPath(route.path, locale, router.getRoutes());
            // A shared section link is explicit: keep its page language and anchor intact.
            if (!route.hash && target && localeFromPath(route.path) !== locale) {
                await router.replace({ path: target, query: route.query, hash: route.hash });
            }
            if (stopped) return;
            // Run detection once. Later language changes belong to the visitor, not scrolling.
            removeNavigationHook = router.afterEach((to, from, failure) => {
                if (failure || localeFromPath(to.path) === localeFromPath(from.path)) return;
                savePreference(localeFromPath(to.path));
            });
        },
        stop() {
            stopped = true;
            removeNavigationHook?.();
        },
    };
}
