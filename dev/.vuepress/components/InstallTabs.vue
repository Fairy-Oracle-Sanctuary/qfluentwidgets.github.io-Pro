<template>
    <LanguageTabs>
        <template #python><slot name="python" /></template>
        <template #cpp><slot name="cpp" /></template>
    </LanguageTabs>
</template>

<script setup>
import LanguageTabs from './LanguageTabs.vue';
</script>
