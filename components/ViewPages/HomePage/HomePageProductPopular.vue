<template>
    <section
        w:p="y-15"
        w:m="t-20"
        w:bg="blue-50/70"
    >
        <VContainer>
            <div
                w:display="flex"
                w:flex="items-center justify-center wrap"
                w:grid="gap-4"
            >
                <VIcon
                    icon="mdi:mdi-lightning-bolt-outline"
                    size="30"
                    w:text="red-500"
                />

                <h2
                    w:text="md:3xl 2xl"
                    w:case="capital"
                    w:font="semibold"
                >
                    {{ $t('Product.Popular') }}
                </h2>

                <VIcon
                    icon="mdi:mdi-lightning-bolt-outline"
                    size="30"
                    w:text="red-500"
                />
            </div>

            <div w:m="t-10">
                <VRow>
                    <VCol
                        v-for="slide in 6"
                        :key="slide"
                        lg="2"
                        md="3"
                        sm="4"
                        cols="6"
                    >
                        <BaseProductCard />
                    </VCol>
                </VRow>
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
        </VContainer>
    </section>
</template>
