<template>
    <section
        w:m="t-50px"
        w:pos="relative"
    >
        <TheContainer>
            <h3
                w:text="xl"
                w:case="capital"
                w:font="semibold"
            >
                {{ $t('Category.Popular') }}
            </h3>

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
