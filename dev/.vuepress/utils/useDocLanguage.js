import { inject } from 'vue';

export const docLanguageKey = Symbol('documentation-language');

export function useDocLanguage() {
    const state = inject(docLanguageKey);
    if (!state) throw new Error('Documentation language state must be provided by client setup.');
    return state;
}
