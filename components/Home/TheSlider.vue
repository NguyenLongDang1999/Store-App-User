<template>
    <div>
        <Carousel
            :autoplay="10000"
            wrap-around
        >
            <Slide
                v-for="slide in 10"
                :key="slide"
            >
                <NuxtImg src="https://placehold.co/1920x800/EEE/31343C" />
            </Slide>
        </Carousel>
    </div>
</template>
