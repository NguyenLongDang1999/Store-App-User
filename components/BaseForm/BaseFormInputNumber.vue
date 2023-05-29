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
        <BaseFormButton
            w:p="x-1"
            w:m="0"
            w:border="r-1 gray-100"
            @click="emits('update:modelValue', Number(modelValue) - 1)"
        >
            <template #text>
                <VIcon
                    icon="mdi:mdi-minus"
                    size="20"
                    w:text="gray-500"
                />
            </template>
        </BaseFormButton>

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

        <BaseFormButton
            w:p="x-1"
            w:m="0"
            w:border="l-1 gray-100"
            @click="emits('update:modelValue', Number(modelValue) + 1)"
        >
            <template #text>
                <VIcon
                    icon="mdi:mdi-plus"
                    size="20"
                    w:text="gray-500"
                />
            </template>
        </BaseFormButton>
    </div>
</template>
