<script setup lang="ts">

// ** Props & Emits
interface Props {
    name: string
    size: string
    count?: number
}

defineProps<Props>()
</script>

<template>
    <div class="flex flex-col">
        <Icon
            :name="name"
            :size="size"
        />

        <span
            v-if="count"
            class="text-[10px] text-white text-center bg-primary-500 rounded-xl font-semibold absolute z-20 h-4 min-w-[16px] leading-4 -top-1 -right-2"
        >
            {{ count }}
        </span>
    </div>
</template>
