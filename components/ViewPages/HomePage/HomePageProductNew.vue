<template>
    <section w:m="t-30">
        <TheContainer>
            <div w:text="center">
                <h2
                    w:text="md:4xl 2xl"
                    w:case="capital"
                    w:font="semibold"
                >
                    {{ $t('Product.News') }}
                </h2>
            </div>

            <div w:m="t-10">
                <div w:grid="~ cols-12 gap-4">
                    <div
                        v-for="slide in 12"
                        :key="slide"
                        w:grid="xl:col-span-2 lg:col-span-3 md:col-span-4 col-span-6"
                    >
                        <BaseProductCard />
                    </div>
                </div>
            </div>

            <div
                w:m="t-20"
                w:text="center white"
            >
                <NuxtLink
                    w:bg="blue-600 hover:blue-700"
                    w:border="rounded-md"
                    w:p="y-3 x-5"
                >
                    {{ $t('ViewMore') }}
                </NuxtLink>
            </div>
        </TheContainer>
    </section>
</template>
