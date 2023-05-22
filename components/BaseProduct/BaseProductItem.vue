<script setup lang="ts">

// ** MazUI Imports
import MazBtn from 'maz-ui/components/MazBtn'
import MazInput from 'maz-ui/components/MazInput'

// ** Props & Emits
interface Props {
    product: number
}

defineProps<Props>()

// ** Data
const quantity = ref<number>(1)
</script>

<template>
    <div class="flex gap-3 overflow-hidden mb-5 pb-5 border-b border-b-[#eee]">
        <NuxtLink>
            <NuxtImg
                src="https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-html/assets/images/product-image/6_1.jpg"
                :alt="`product-${product}`"
                width="75"
                height="75"
            />
        </NuxtLink>

        <div class="relative overflow-hidden">
            <NuxtLink class="w-full pr-7 text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis block text-[15px] font-normal leading-none">
                Lorem ipsum dolor sit amet, ctatem.
            </NuxtLink>

            <div class="text-sm mt-1">
                <span class="text-[16px] font-semibold pr-1">700.000đ</span>
                <span>x1</span>
            </div>

            <div class="flex gap-2">
                <MazBtn
                    color="transparent"
                    size="mini"
                    outline
                    @click="quantity--"
                >
                    <Icon
                        name="bx:minus"
                        size="16"
                    />
                </MazBtn>

                <MazInput
                    v-model.number="quantity"
                    size="mini"
                    class="w-20"
                />

                <MazBtn
                    color="transparent"
                    size="mini"
                    outline
                    @click="quantity++"
                >
                    <Icon
                        name="bx:plus"
                        size="16"
                    />
                </MazBtn>
            </div>

            <button
                type="button"
                class="absolute -top-1 right-0 border-0 items-center text-sm text-red-500"
            >
                <Icon
                    name="bx:trash"
                    size="14"
                />
            </button>
        </div>
    </div>
</template>
