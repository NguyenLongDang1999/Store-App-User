<script setup lang="ts">

// ** MazUI Imports
import MazDialog from 'maz-ui/components/MazDialog'

// ** Props & Emits
interface Props {
    modelValue: boolean
    readonly product: number
}

interface Emits {
    (event: 'update:modelValue', payload: boolean): boolean
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

// ** Data
const currentSlide = ref<number>(0)

const images = [
    {
        id: 1,
        url:'https://placekitten.com/800/800'
    },
    {
        id: 2,
        url:'https://placekitten.com/g/800/800'
    },
    {
        id: 3,
        url:'https://placekitten.com/810/810'
    }
]

// ** Methods
const slideTo = (val: number) => currentSlide.value = val
</script>

<template>
    <MazDialog
        width="750px"
        scrollable
        :model-value="modelValue"
        @update:model-value="emits('update:modelValue', false)"
    >
        <div class="grid grid-cols-12 gap-4">
            <div class="md:col-span-6 col-span-12">
                <Carousel
                    v-model="currentSlide"
                    :items-to-show="1"
                    :wrap-around="false"
                    class="mb-4"
                >
                    <Slide
                        v-for="slide in images"
                        :key="slide.id"
                    >
                        <div class="carousel__item">
                            <NuxtImg
                                :alt="`Slider-${slide.id}`"
                                :src="slide.url"
                                width="800"
                                height="800"
                                class="rounded"
                            />
                        </div>
                    </Slide>
                </Carousel>

                <Carousel
                    v-model="currentSlide"
                    :items-to-show="4"
                >
                    <Slide
                        v-for="(slide, index) in images"
                        :key="slide.id"
                        class="px-1"
                    >
                        <div
                            class="carousel__item"
                            @click="slideTo(index)"
                        >
                            <NuxtImg
                                :alt="`Slider-${slide.id}`"
                                :src="slide.url"
                                width="300"
                                height="300"
                                class="rounded"
                            />
                        </div>
                    </Slide>
                </Carousel>
            </div>

            <div class="md:col-span-6 col-span-12">
                <h3 class="text-gray-600 text-xl capitalize">
                    Handbag leather purse for women leather purse for women
                </h3>

                <div class="flex flex-wrap items-center gap-2 my-3">
                    <span class="text-gray-700 font-bold text-lg">300.000đ</span>
                    <span class="line-through text-gray-500 font-light">600.000đ</span>
                </div>

                <div class="maz-text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam autem tenetur laboriosam laborum non, esse assumenda nesciunt corporis facilis impedit suscipit quos explicabo aperiam ipsa cupiditate, at eligendi voluptatum soluta?
                </div>
            </div>
        </div>
    </MazDialog>
</template>
