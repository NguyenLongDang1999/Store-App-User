<template>
    <section
        w:p="y-15"
        w:m="t-30"
        w:bg="blue-50/70"
    >
        <div
            w:display="flex"
            w:flex="items-center justify-center wrap"
            w:grid="gap-4"
        >
            <h2
                w:text="md:4xl 2xl"
                w:case="capital"
                w:font="semibold"
            >
                {{ $t('Product.Sale') }}
            </h2>

            <BaseComponentTimer deadline="2023-05-27" />
        </div>

        <div
            w:m="t-10"
            w:p="x-2 md:x-15"
        >
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
            >
                <SwiperSlide
                    v-for="slide in 10"
                    :key="slide"
                >
                    <BaseProductCard />
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<script setup>
</script>
