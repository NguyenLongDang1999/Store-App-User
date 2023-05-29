<template>
    <VApp>
        <TheHeader />

        <VMain>
            <slot />

            <LazyBaseComponentService />
        </VMain>
    </VApp>
</template>
