<script setup lang="ts">

// ** Third-party Imports
import type { Options } from '@splidejs/vue-splide'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

// ** Data
const mainOptions: Options = {
    type      : 'fade',
    perPage   : 1,
    perMove   : 1,
    pagination: false
}

const thumbsOptions: Options = {
    type        : 'slide',
    rewind      : true,
    gap         : '1rem',
    pagination  : false,
    fixedWidth  : 110,
    fixedHeight : 70,
    cover       : true,
    focus       : 'center',
    isNavigation: true,
    updateOnMove: true
}

const main   = ref<InstanceType<typeof Splide>>()
const thumbs = ref<InstanceType<typeof Splide>>()

// ** LifeCycle
onMounted(() => {
    const thumbSplide = thumbs.value?.splide

    if (thumbSplide) {
        main.value?.sync(thumbSplide)
    }
})

</script>

<template>
    <Teleport to="body">
        <div
            id="hs-product-modal"
            class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
        >
            <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-3xl lg:w-full m-3 lg:mx-auto">
                <div class="flex flex-col bg-white border shadow-sm rounded-xl">
                    <div class="text-right py-3 px-4">
                        <button
                            type="button"
                            class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                            data-hs-overlay="#hs-product-modal"
                        >
                            <span class="sr-only">Close</span>
                            <Icon
                                name="bx:x"
                                size="24"
                            />
                        </button>
                    </div>

                    <div class="p-4 overflow-y-auto">
                        <div class="grid grid-cols-12">
                            <div class="col-span-5">
                                <Splide
                                    ref="main"
                                    :options="mainOptions"
                                >
                                    <SplideSlide
                                        v-for="slide in 10"
                                        :key="slide"
                                    >
                                        <img
                                            src="https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-html/assets/images/product-image/3_1.jpg"
                                            :alt="slide"
                                            width="270"
                                            height="300"
                                            class="max-w-[270px] max-h-[300px]"
                                        >
                                    </SplideSlide>
                                </Splide>

                                <Splide
                                    ref="thumbs"
                                    :options="thumbsOptions"
                                >
                                    <SplideSlide
                                        v-for="slide in 10"
                                        :key="slide"
                                    >
                                        <img
                                            src="https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-html/assets/images/product-image/3_1.jpg"
                                            :alt="slide"
                                        >
                                    </SplideSlide>
                                </Splide>
                            </div>

                            <div class="col-span-7">
                                <h5 class="text-gray-600 text-lg">
                                    Handbag leather purse for women
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style>
.carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}
</style>
