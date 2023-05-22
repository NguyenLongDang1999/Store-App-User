<template>
    <Carousel
        :items-to-show="1.2"
        :autoplay="10000"
        wrap-around
    >
        <Slide
            v-for="slide in 10"
            :key="slide"
            class="p-1"
        >
            <NuxtImg
                :alt="`Slider-${slide}`"
                height="800"
                src="https://placekitten.com/1920/800"
                width="1920"
                class="rounded"
            />
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>
