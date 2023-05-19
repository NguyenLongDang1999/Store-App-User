<script setup lang="ts">

// ** Third-party Imports
import type { Options } from '@splidejs/vue-splide'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

// ** Data
const options: Options = {
    rewind: true,
    lazyLoad: true,
    perPage: 1,
    gap: '1rem',
    type : 'loop',
    padding: '10%'
}
</script>

<template>
    <Splide :options="options">
        <SplideSlide
            v-for="slide in 10"
            :key="slide"
        >
            <NuxtImg
                src="https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-html/assets/images/main-slider-banner/1.jpg"
                :alt="`Slider-${slide}`"
                width="1920"
                height="800"
            />
        </SplideSlide>
    </Splide>
</template>
