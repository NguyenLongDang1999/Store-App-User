<script setup lang="ts">

// ** Props & Emits
interface Props {
    modelValue: string
}

interface Emits {
    (event: 'update:modelValue', payload: string): string
}

defineProps<Props>()

const emits = defineEmits<Emits>()
</script>

<template>
    <div
        w:display="inline-flex"
        w:border="~ gray-100"
    >
        <button
            w:p="x-1"
            w:m="0"
            w:transition="~"
            w:border="r-1 gray-100"
            type="button"
            @click="emits('update:modelValue', String(Number(modelValue) - 1))"
        >
            <VIcon
                icon="mdi:mdi-minus"
                size="20"
                w:text="gray-500"
            />
        </button>

        <input
            type="number"
            class="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            w:w="20"
            w:text="center"
            w:p="x-3"
            w:outline="none"
            w:transition="~"
            :value="modelValue"
            readonly
        >

        <button
            w:p="x-1"
            w:m="0"
            w:transition="~"
            w:border="r-1 gray-100"
            type="button"
            @click="emits('update:modelValue', String(Number(modelValue) + 1))"
        >
            <VIcon
                icon="mdi:mdi-plus"
                size="20"
                w:text="gray-500"
            />
        </button>
    </div>
</template>
