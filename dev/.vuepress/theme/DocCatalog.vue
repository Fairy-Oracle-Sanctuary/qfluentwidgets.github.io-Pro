<template>
    <div class="page-catalog-container">
        <h5 class="tip">{{ catalogTitle }}</h5>
        <ul>
            <CatalogItem v-for="item in catalog" :key="item.link || item.text" :item="item" />
        </ul>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { usePageCatalog, useThemeLocaleData } from 'vuepress-theme-reco/lib/client/composables/index.js';
import { CatalogItem } from 'vuepress-theme-reco/lib/client/components/CatalogItem.js';
import { filterDocCatalog } from '../utils/doc-language.mjs';
import { useDocLanguage } from '../utils/useDocLanguage.js';

const route = useRoute();
const allItems = usePageCatalog();
const themeConfig = useThemeLocaleData();
const selection = useDocLanguage();
const catalogTitle = computed(() => themeConfig.value.catalogTitle || 'ON THIS PAGE');
const catalog = computed(() => selection.path === route.path
    ? filterDocCatalog(allItems.value, selection.language)
    : allItems.value);
</script>
