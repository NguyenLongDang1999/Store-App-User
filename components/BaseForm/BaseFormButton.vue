<script setup lang="ts">

// ** Props & Emits
interface Props {
    text: string
    circle: boolean
    block?: boolean
    type?: 'button' | 'reset' | 'submit'
}

withDefaults(defineProps<Props>(), {
    type: 'button',
    circle: false,
    block: false
})
</script>

<template>
    <button
        :type="type"
        w:p="4"
        w:m="y-3"
        w:transition="~"
        :w:w="!block || 'full'"
        :w:border="circle ? 'rounded-full' : 'rounded-lg'"
        v-bind="$attrs"
    >
        <span
            v-if="text"
            w:case="capital"
            :w:text="block ? 'lg' : 'sm'"
        >
            {{ text }}
        </span>

        <slot
            v-else
            name="text"
        />
    </button>
</template>
