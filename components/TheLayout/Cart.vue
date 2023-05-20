<script setup lang="ts">

// ** MazUI Imports
import MazDrawer from 'maz-ui/components/MazDrawer'

// ** Props & Emits
interface Props {
    modelValue: boolean
}

interface Emits {
    (event: 'update:modelValue', payload: boolean): boolean
}

defineProps<Props>()

const emits = defineEmits<Emits>()
</script>

<template>
    <MazDrawer
        variant="right"
        :model-value="modelValue"
        size="350px"
        @update:model-value="emits('update:modelValue', false)"
    >
        <template #title>
            <h3 class="font-semibold text-gray-700 text-sm uppercase">
                {{ $t('Cart.Title') }}
            </h3>
        </template>

        <template #default>
            <div class="p-4">
                <ul>
                    <li
                        v-for="item in 10"
                        :key="item"
                    >
                        <BaseProductCart :product="item" />
                    </li>
                </ul>

                <ul class="mt-5">
                    <li class="flex justify-between text-[16px]">
                        <span class="capitalize">{{ $t('Cart.Total') }}</span>
                        <span class="font-semibold">300.000đ</span>
                    </li>
                </ul>

                <div class="flex gap-3 justify-between mt-5">
                    <button
                        type="button"
                        class="py-3 px-4 w-1/2 rounded-md border capitalize border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                    >
                        {{ $t('Cart.View') }}
                    </button>

                    <button
                        type="button"
                        class="py-3 px-4 w-1/2 rounded-md capitalize border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                    >
                        {{ $t('Cart.Checkout') }}
                    </button>
                </div>
            </div>
        </template>
    </MazDrawer>
</template>
