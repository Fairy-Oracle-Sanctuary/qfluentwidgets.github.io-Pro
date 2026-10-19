export function languageFromHash(hash = '') {
    let decoded = hash;
    try { decoded = decodeURIComponent(hash); } catch { /* Keep malformed URLs usable. */ }
    return decoded.startsWith('#c-') ? 'cpp' : 'python';
}

export function createDocLanguageState() {
    return { path: null, language: 'python', owner: null };
}

export function activateDocLanguage(state, path, hash, owner) {
    state.path = path;
    state.language = languageFromHash(hash);
    state.owner = owner;
}

export function releaseDocLanguage(state, owner) {
    if (state.owner !== owner) return;
    state.path = null;
    state.owner = null;
}

export function filterDocCatalog(items, language) {
    return items.flatMap(item => {
        const children = filterDocCatalog(item.children || [], language);
        // Markdown heading hierarchy spans slot boundaries. A C++ h3 can be
        // nested beneath a Python h2, so retain matching descendants even when
        // their parent belongs to the hidden tab.
        return languageFromHash(item.link) === language
            ? [{ ...item, children }]
            : children;
    });
}
