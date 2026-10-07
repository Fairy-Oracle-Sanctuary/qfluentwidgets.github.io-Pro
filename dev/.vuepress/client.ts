import { defineClientConfig } from '@vuepress/client';
import { onMounted, onUnmounted, provide, shallowReactive } from 'vue';
import { useRouter } from 'vue-router';
import { createDocLanguageState } from './utils/doc-language.mjs';
import { docLanguageKey } from './utils/useDocLanguage.js';
import { createSiteLocaleController } from './utils/site-locale.mjs';

export default defineClientConfig({
    setup() {
        // Per-app state avoids leaking the selected language between SSR requests.
        provide(docLanguageKey, shallowReactive(createDocLanguageState()));
        const router = useRouter();
        let localeController;
        onMounted(() => {
            localeController = createSiteLocaleController(router, {
                browser: navigator,
                getStorage: () => window.localStorage,
            });
            localeController.start().catch(error => {
                console.warn('Unable to select the initial documentation language.', error);
            });
        });
        onUnmounted(() => localeController?.stop());
    },
});
