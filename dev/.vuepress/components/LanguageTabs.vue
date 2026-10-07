<template>
    <div class="doc-tabs">
        <div class="doc-tabs-switch">
            <div class="doc-tabs-list" role="tablist" :aria-label="isChinese ? '选择开发语言' : 'Development language'">
                <button v-for="(tab, index) in tabs" :key="tab.id"
                    :id="`language-tab-${tab.id}`" :ref="element => buttons[index] = element"
                    class="doc-tabs-button" :class="{ 'is-active': activeTab === tab.id }"
                    type="button" role="tab" :aria-selected="activeTab === tab.id"
                    :aria-controls="`language-panel-${tab.id}`" :tabindex="activeTab === tab.id ? 0 : -1"
                    @click="activeTab = tab.id" @keydown="navigateTabs($event, index)">
                    {{ tab.label }}
                </button>
            </div>
        </div>
        <div v-for="tab in tabs" :key="tab.id" v-show="activeTab === tab.id"
            :id="`language-panel-${tab.id}`" class="doc-tabs-panel" role="tabpanel"
            :aria-labelledby="`language-tab-${tab.id}`" tabindex="0">
            <slot :name="tab.id" />
        </div>
    </div>
</template>

<script setup>
import { computed, onUnmounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useRouteLocale } from '@vuepress/client';
import { activateDocLanguage, releaseDocLanguage } from '../utils/doc-language.mjs';
import { useDocLanguage } from '../utils/useDocLanguage.js';

const tabs = [
    { id: 'python', label: 'Python' },
    { id: 'cpp', label: 'C++' },
];
const selection = useDocLanguage();
const owner = Symbol('doc-tabs');
const activeTab = computed({
    get: () => selection.language,
    set: language => { selection.language = language; },
});
const buttons = ref([]);
const route = useRoute();
const routeLocale = useRouteLocale();
const isChinese = computed(() => routeLocale.value === '/zh/');

// Read deep links when entering a page, not on scroll-driven router.replace hashes.
watch(() => route.path, path => {
    activateDocLanguage(selection, path, route.hash, owner);
}, { immediate: true, flush: 'sync' });
onUnmounted(() => releaseDocLanguage(selection, owner));

function navigateTabs(event, index) {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else return;
    event.preventDefault();
    activeTab.value = tabs[next].id;
    buttons.value[next]?.focus();
}
</script>

<style scoped>
/* The theme and copy plugin reserve div classes containing "language-" for code blocks. */
.doc-tabs-switch {
    @apply flex justify-center my-8;
}

.doc-tabs-list {
    @apply inline-flex rounded-full bg-slate-100 dark:bg-slate-800 p-1.5;
}

.doc-tabs-button {
    @apply rounded-full text-base font-semibold text-slate-500 dark:text-slate-400;
    min-width: 100px;
    padding: 10px 20px;
    border: 0;
    cursor: pointer;
    background: transparent;
    line-height: 24px;
    transition: background-color 180ms ease, color 180ms ease, box-shadow 180ms ease;
}

.doc-tabs-button:not(.is-active):hover {
    @apply bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200;
}

.doc-tabs-button.is-active {
    background: #0ea5e9;
    color: #fff !important;
    box-shadow: 0 2px 8px rgb(14 165 233 / 15%);
}

.doc-tabs-button.is-active:hover {
    background: #0284c7;
}

.doc-tabs-button:focus-visible,
.doc-tabs-panel:focus-visible {
    outline: 2px solid #0ea5e9;
    outline-offset: 3px;
}

.doc-tabs-panel {
    min-width: 0;
}

@media (prefers-reduced-motion: reduce) {
    .doc-tabs-button {
        transition: none;
    }
}
</style>
