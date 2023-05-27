<script setup lang="ts">

// ** Third Party Imports
import type { SwiperOptions } from 'swiper'

// ** Data
const swiper = ref<SwiperOptions | null>(null)
</script>

<template>
    <section
        w:p="y-15"
        w:m="t-30"
        w:bg="blue-50/70"
    >
        <TheContainer>
            <div
                w:grid="~ cols-3"
                w:flex="justify-between"
            >
                <div w:grid="col-span-2">
                    <div
                        w:display="flex"
                        w:flex="items-center wrap"
                        w:grid="gap-4"
                    >
                        <h2
                            w:text="md:4xl 2xl"
                            w:case="capital"
                            w:font="semibold"
                        >
                            {{ $t('Product.Sale') }}
                        </h2>

                        <BaseComponentTimer deadline="2023-05-28" />
                    </div>
                </div>

                <div w:grid="col-span-1">
                    <div
                        w:display="flex"
                        w:flex="justify-end"
                        w:grid="gap-3"
                    >
                        <button
                            w:p="2"
                            w:text="hover:white"
                            w:transition="~"
                            w:border="rounded-full"
                            w:bg="hover:blue-600"
                            @click="swiper.slidePrev()"
                        >
                            <Icon
                                name="mdi:arrow-left"
                                size="28"
                            />
                        </button>

                        <button
                            w:p="2"
                            w:text="hover:white"
                            w:transition="~"
                            w:border="rounded-full"
                            w:bg="hover:blue-600"
                            @click="swiper.slideNext()"
                        >
                            <Icon
                                name="mdi:arrow-right"
                                size="28"
                            />
                        </button>
                    </div>
                </div>
            </div>

            <div w:m="t-10">
                <Swiper
                    :slides-per-view="2"
                    :space-between="10"
                    :breakpoints="{
                        '768': {
                            slidesPerView: 3,
                        },
                        '992': {
                            slidesPerView: 4,
                        },
                        '1200': {
                            slidesPerView: 5,
                        },
                        '1400': {
                            slidesPerView: 6,
                        },
                    }"
                    @swiper="(s) => swiper = s"
                >
                    <SwiperSlide
                        v-for="slide in 10"
                        :key="slide"
                    >
                        <BaseProductCard />
                    </SwiperSlide>
                </Swiper>
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
