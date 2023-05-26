<script setup lang="ts">

// ** Third Party Imports
import type { SwiperOptions } from 'swiper'

// ** Data
const swiper = ref<SwiperOptions | null>(null)
</script>

<template>
    <section
        w:m="t-50px"
        w:pos="relative"
    >
        <TheContainer>
            <div
                w:grid="~ cols-2"
                w:flex="items-center"
            >
                <div w:grid="col-span-1">
                    <h2
                        w:text="md:4xl 2xl"
                        w:case="capital"
                        w:font="semibold"
                    >
                        {{ $t('Category.Popular') }}
                    </h2>
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

            <div w:m="t-5">
                <Swiper
                    :slides-per-view="1.8"
                    :space-between="20"
                    :breakpoints="{
                        '768': {
                            slidesPerView: 1.8,
                            spaceBetween: 30,
                        },
                        '992': {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        '1200': {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        '1400': {
                            slidesPerView: 4,
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
            </div>
        </TheContainer>
    </section>
</template>
