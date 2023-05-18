<script setup lang="ts">

// ** Lifecycle
onMounted(() => import('preline'))
</script>

<template>
    <Head>
        <Title>Nuxivy</Title>

        <Body class="my-0 mx-auto bg-white text-sm font-normal leading-[1.625] tracking-[.4px] relative text-[#777] min-h-full">
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </Body>
    </Head>
</template>


<style lang="scss">
.page-enter-active,
.page-leave-active {
    transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
