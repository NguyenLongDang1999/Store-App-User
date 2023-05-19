<template>
    <Carousel>
        <Slide
            v-for="slide in 10"
            :key="slide"
        >
            <NuxtImg
                src="https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-html/assets/images/main-slider-banner/1.jpg"
                :alt="`Slider-${slide}`"
                width="1920"
                height="800"
            />
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>
