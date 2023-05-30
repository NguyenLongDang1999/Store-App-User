<script setup lang="ts">

// ** useHooks
const route = useRoute()
const { categoryDetail } = await useCategoryDetail(route.params.slug as string)
</script>

<template>
    <h1>
        {{ categoryDetail.name }}
    </h1>
</template>
