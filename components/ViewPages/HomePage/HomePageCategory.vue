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
        w:m="t-50px"
        w:pos="relative"
    >
        <VContainer>
            <VRow align="center">
                <VCol cols="8">
                    <h2
                        w:text="md:3xl 2xl"
                        w:case="capital"
                        w:font="semibold"
                    >
                        {{ $t('Category.Popular') }}
                    </h2>
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

                <VCol cols="12">
                    <Swiper
                        :slides-per-view="1.8"
                        :space-between="20"
                        :breakpoints="{
                            [thresholds.xs]: {
                                slidesPerView: 1.8,
                                spaceBetween: 30,
                            },
                            [thresholds.sm]: {
                                slidesPerView: 2.5,
                                spaceBetween: 30,
                            },
                            [thresholds.md]: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            [thresholds.lg]: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            [thresholds.xl]: {
                                slidesPerView: 5,
                                spaceBetween: 30,
                            },
                        }"
                        @swiper="(s) => swiper = s"
                    >
                        <SwiperSlide
                            v-for="slide in 10"
                            :key="slide"
                        >
                            <BaseCategoryItem />
                        </SwiperSlide>
                    </Swiper>
                </VCol>
            </VRow>
        </VContainer>
    </section>
</template>
