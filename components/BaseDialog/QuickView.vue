<script setup lang="ts">

// ** MazUI Imports
import MazDialog from 'maz-ui/components/MazDialog'
import MazGallery from 'maz-ui/components/MazGallery'

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
const images = [
    'https://placekitten.com/800/800',
    'https://placekitten.com/640/500',
    'https://placekitten.com/640/1000'
]
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
                <MazGallery
                    :images="images"
                    :height="400"
                />
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
