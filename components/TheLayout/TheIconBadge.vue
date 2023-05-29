<script setup lang="ts">

// ** Props & Emits
interface Props {
    icon: string
    count?: number
}

defineProps<Props>()
</script>

<template>
    <div
        w:p="2"
        w:pos="relative"
        w:cursor="pointer"
        w:border="rounded-full"
        w:hover="bg-blue-600 text-white"
        w:transition="~"
        v-bind="$attrs"
    >
        <VIcon
            :icon="icon"
            size="28"
        />

        <span
            v-if="count"
            w:pos="absolute top-0 right-0"
            w:w="5"
            w:h="5"
            w:bg="blue-600"
            w:text="white 11px center"
            w:border="rounded-full 2px white"
            w:font="leading-4"
        >{{ count }}</span>
    </div>
</template>
