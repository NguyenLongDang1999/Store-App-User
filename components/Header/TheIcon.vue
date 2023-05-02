<script setup lang="ts">

// ** Props & Emits
interface Props {
    name: string
    to?: string
    badge?: number
}

defineProps<Props>()
</script>

<template>
    <NuxtLink
        :to="to"
        cursor="pointer"
        pos="relative"
        display="flex"
        justify="center"
        align="items-center"
        after="content-DEFAULT w-9 h-9 rounded-1/2 absolute -z-1 transform scale-0 duration-300 bg-blue-700"
        hover="text-white after:scale-100"
        z="1"
    >
        <span
            v-if="badge"
            bg="blue-700"
            pos="absolute -top-3 -right-3"
            border="rounded-1/2 2px solid white"
            text="12px white center"
            font="leading-19px medium"
            h="22px"
            w="22px"
        >{{ badge }}</span>

        <Icon
            :name="name"
            size="20"
        />
    </NuxtLink>
</template>
