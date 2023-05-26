<template>
    <section
        w:p="y-15"
        w:m="t-20"
        w:bg="blue-50/70"
    >
        <TheContainer>
            <div
                w:display="flex"
                w:flex="items-center justify-center wrap"
                w:grid="gap-4"
            >
                <Icon
                    name="mdi:lightning-bolt-outline"
                    size="30"
                    w:text="red-500"
                />

                <h2
                    w:text="md:4xl 2xl"
                    w:case="capital"
                    w:font="semibold"
                >
                    {{ $t('Product.Popular') }}
                </h2>

                <Icon
                    name="mdi:lightning-bolt-outline"
                    size="30"
                    w:text="red-500"
                />
            </div>

            <div w:m="t-10">
                <div w:grid="~ cols-12 gap-4">
                    <div
                        v-for="slide in 6"
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

<script setup>
</script>
