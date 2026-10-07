import { defineClientConfig } from '@vuepress/client';
import { provide, shallowReactive } from 'vue';
import { createDocLanguageState } from './utils/doc-language.mjs';
import { docLanguageKey } from './utils/useDocLanguage.js';

export default defineClientConfig({
    setup() {
        // Per-app state avoids leaking the selected language between SSR requests.
        provide(docLanguageKey, shallowReactive(createDocLanguageState()));
    },
});
