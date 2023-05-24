<script setup lang="ts">

// ** Props & Emits
interface Props {
    showOverplay: boolean
}

defineProps<Props>()
</script>

<template>
    <Transition name="overplay">
        <div
            v-if="showOverplay"
            w:pos="fixed top-0 bottom-0 left-0 right-0"
            w:z="999"
            w:bg="black opacity-40"
            v-bind="$attrs"
        />
    </Transition>
</template>

<style lang="scss" scoped>
.overplay-enter-active,
.overplay-leave-active {
    transition: opacity 200ms linear;
}

.overplay-enter-from,
.overplay-leave-to {
    opacity: 0;
}
</style>
