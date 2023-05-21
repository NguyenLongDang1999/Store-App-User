<script setup lang="ts">

// ** MazUI Imports
import MazCarousel from 'maz-ui/components/MazCarousel'

// ** Data
</script>

<template>
    <MazCarousel class="carousel">
        <NuxtImg
            v-for="(item, i) in Array(8)"
            :key="i"
            src="https://placekitten.com/1920/800"
            :alt="`Slider-${i}`"
            width="1920"
            height="800"
        />
    </MazCarousel>
</template>

<style lang="scss" scoped>
    :deep(.m-carousel__items::-webkit-scrollbar) {
        display: none;
    }
</style>
