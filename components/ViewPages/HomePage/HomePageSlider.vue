<template>
    <section>
        <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :slides-per-view="1"
            :autoplay="{
                delay: 8000,
                disableOnInteraction: true,
            }"
            :creative-effect="{
                prev: {
                    shadow: false,
                    translate: ['-20%', 0, -1],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }"
            loop
            effect="creative"
        >
            <SwiperSlide
                v-for="slide in 10"
                :key="slide"
            >
                <NuxtImg
                    src="https://placehold.co/1920x775/EEE/31343C"
                    alt="Slider"
                    width="1920"
                    height="775"
                />
            </SwiperSlide>
        </Swiper>
    </section>
</template>
