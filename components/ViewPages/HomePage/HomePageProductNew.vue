<template>
    <section w:m="t-30">
        <VContainer>
            <div w:text="center">
                <h2
                    w:text="md:3xl 2xl"
                    w:case="capital"
                    w:font="semibold"
                >
                    {{ $t('Product.News') }}
                </h2>
            </div>

            <div w:m="t-10">
                <VRow>
                    <VCol
                        v-for="slide in 12"
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
