<script setup lang="ts">

// ** Third Party Imports
import type { SwiperOptions } from 'swiper'
import { useDisplay } from 'vuetify'

// ** useHooks
const { thresholds } = useDisplay()

// ** Data
const swiper = ref<SwiperOptions | null>(null)
</script>

<template>
    <section
        w:p="y-15"
        w:m="t-30"
        w:bg="blue-50/70"
    >
        <VContainer>
            <VRow align="center">
                <VCol cols="8">
                    <div
                        w:display="flex"
                        w:flex="items-center wrap"
                        w:grid="gap-4"
                    >
                        <h2
                            w:text="md:3xl 2xl"
                            w:case="capital"
                            w:font="semibold"
                        >
                            {{ $t('Product.Sale') }}
                        </h2>

                        <BaseComponentTimer deadline="2023-05-30" />
                    </div>
                </VCol>

                <VCol cols="4">
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
                            <VIcon
                                icon="mdi:mdi-arrow-left"
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
                            <VIcon
                                icon="mdi:mdi-arrow-right"
                                size="28"
                            />
                        </button>
                    </div>
                </VCol>
            </VRow>

            <div w:m="t-10">
                <Swiper
                    :slides-per-view="2"
                    :space-between="10"
                    :breakpoints="{
                        [thresholds.sm]: {
                            slidesPerView: 3,
                        },
                        [thresholds.md]: {
                            slidesPerView: 4,
                        },
                        [thresholds.lg]: {
                            slidesPerView: 5,
                        },
                        [thresholds.xl]: {
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
        </vcontainer>
    </section>
</template>
