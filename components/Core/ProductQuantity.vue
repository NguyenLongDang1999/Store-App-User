<script setup lang="ts">

// ** Props & Emits
interface Emits {
    (event: 'quantity', payload: number): number
}

const emits = defineEmits<Emits>()

// ** Data
const qty = ref<number>(1)

// ** Watch
watch(() => qty.value, val => emits('quantity', val))
</script>

<template>
    <div display="flex">
        <span
            border="rounded-1/2 2px solid light-600"
            bg="light-600"
            text="center lg"
            w="26px"
            h="26px"
            font="leading-5"
            display="block"
            cursor="pointer"
            hover="bg-blue-600 text-white"
            transition="~"
            @click="qty > 1 ? qty-- : qty"
        >-</span>

        <input
            v-model.number="qty"
            type="text"
            border="none"
            text="16px center"
            font="semibold"
            p="0"
            m="x-3"
            h="26px"
            w="30px"
        >

        <span
            border="rounded-1/2 2px solid light-600"
            bg="light-600"
            text="center lg"
            w="26px"
            h="26px"
            font="leading-5"
            display="block"
            cursor="pointer"
            hover="bg-blue-600 text-white"
            transition="~"
            @click="qty++"
        >+</span>
    </div>
</template>
