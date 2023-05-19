<script setup lang="ts">

// ** Props & Emits
interface Props {
    readonly title: string
}

defineProps<Props>()
</script>

<template>
    <div class="mb-8 text-center">
        <h2 class="font-bold tracking-wide text-2xl capitalize">
            {{ $t(`Product.${title}`) }}
        </h2>

        <div class="inline-flex items-center justify-center w-full">
            <hr class="w-40 h-[2px] mt-3.5 my-3 bg-gray-200 border-0 rounded">

            <div class="absolute px-2 -translate-x-1/2 bg-white left-1/2">
                <Icon
                    name="bx:circle"
                    size="10"
                />
            </div>
        </div>
    </div>
</template>
