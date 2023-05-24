<script setup lang="ts">

// ** Props & Emits
interface Props {
    title: string
    position?: 'left' | 'right'
    close: () => void
}

defineProps<Props>()
</script>

<template>
    <aside
        w:pos="fixed top-0 bottom-0"
        w:z="1010"
        w:w="md:480px full"
        w:bg="white"
        w:transition="transition-[width] duration-500"
        :class="position === 'left' ? 'left-0' : 'right-0'"
        v-bind="$attrs"
    >
        <div
            w:p="4"
            w:display="flex"
            w:flex="justify-between items-center"
            w:border="b-1 b-gray-200"
        >
            <h3
                w:case="capital"
                w:font="semibold"
                w:text="xl"
            >
                {{ title }}
            </h3>

            <div
                w:p="2"
                w:cursor="pointer"
                w:border="rounded-full"
                w:hover="bg-blue-600 text-white"
                w:transition="~"
                @click="close"
            >
                <Icon
                    name="mdi:close"
                    size="24"
                />
            </div>
        </div>

        <div w:p="4">
            <slot />
        </div>
    </aside>
</template>
