<template>
    <Html lang="vi">
        <Head>
            <Title>{{ config.title }}</Title>

            <Body
                w:m="0"
                w:bg="white"
                w:pos="relative"
                w:overflow="x-hidden"
                w:text="sm [#333] left"
                w:font="sans"
            >
                <NuxtLayout>
                    <NuxtPage />
                </NuxtLayout>
            </Body>
        </Head>
    </Html>
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
