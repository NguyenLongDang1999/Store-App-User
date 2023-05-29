<template>
    <VApp>
        <TheHeader />

        <VMain>
            <slot />

            <LazyBaseComponentService />
        </VMain>

        <LazyTheFooter />
    </VApp>
</template>
