<script setup lang="ts">

// ** Props & Emits
interface Props {
    modelValue: string
}

interface Emits {
    (event: 'update:modelValue', payload: string): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

// ** Data
const inputValue = ref(props.modelValue)

// ** Methods
const updateModelValue = (value: string) => {
    inputValue.value = value
    emits('update:modelValue', value)
}
</script>

<template>
    <div class="relative flex rounded-md">
        <input
            v-model="inputValue"
            type="text"
            v-bind="$attrs"
            placeholder="Search Product..."
            class="py-3 px-4 pr-11 block w-full border border-solid border-gray-300 rounded-md text-sm focus:z-10 focus:outline-none focus:border-blue-500"
            @input="updateModelValue($event.target.value)"
        >

        <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4">
            <Icon
                name="bx:search"
                size="24"
                class="h-5 w-5 text-gray-400"
            />
        </div>
    </div>
</template>
