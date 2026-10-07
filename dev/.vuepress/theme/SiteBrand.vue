<script setup>
import { computed } from 'vue';
import { useRouteLocale, useSiteLocaleData, withBase } from '@vuepress/client';
import { useThemeLocaleData } from '@vuepress/plugin-theme-data/client';

const routeLocale = useRouteLocale();
const siteLocale = useSiteLocaleData();
const themeLocale = useThemeLocaleData();
const siteBrandLogo = computed(() => themeLocale.value.logo);
const siteBrandTitle = computed(() => siteLocale.value.title);
const homeLabel = computed(() => routeLocale.value === '/zh/' ? '返回主页' : 'Back to home');
</script>

<template>
    <RouterLink class="site-brand" :to="routeLocale" :aria-label="homeLabel" :title="homeLabel">
        <img v-if="siteBrandLogo" class="logo"
             :src="withBase(siteBrandLogo)" :alt="siteBrandTitle">
        <span v-if="siteBrandTitle" class="site-name" :class="{ 'can-hide': siteBrandLogo }">
            {{ siteBrandTitle }}
        </span>
    </RouterLink>
</template>

<style>
.site-brand {
    @apply flex items-center text-xl font-semibold;
    text-decoration: none !important;
    cursor: pointer;

    .logo {
        @apply mr-4 inline-block h-8 w-8 rounded-lg;
    }

    &:focus-visible {
        outline: 2px solid #38bdf8;
        outline-offset: 4px;
        border-radius: 4px;
    }
}
</style>
