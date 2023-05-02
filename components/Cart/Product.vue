<script setup lang="ts">

// ** Props & Emits
interface Props {
    item: number
}

defineProps<Props>()
</script>

<template>
    <div
        display="flex"
        align="items-center"
    >
        <div
            m="r-30px"
            pos="relative"
        >
            <NuxtLink>
                <NuxtImg
                    src="https://placehold.co/100x100/EEE/31343C"
                    :alt="item"
                    w="100px"
                    h="100px"
                    border="rounded-lg"
                    object="cover"
                />
            </NuxtLink>

            <button
                type="button"
                display="flex"
                justify="center"
                align="items-center"
                pos="absolute -top-15px -left-15px"
                w="28px"
                h="28px"
                border="rounded-1/2 2px solid white"
                bg="light-600"
                text="dark-500"
                transition="~"
                hover="bg-blue-600 text-white"
                @click="emits('close', false)"
            >
                <Icon
                    name="ph:x"
                    size="12"
                />
            </button>
        </div>

        <div
            display="flex"
            justify="between"
            align="items-center"
            w="full"
            grid="gap-3"
        >
            <div
                display="flex"
                flex="col"
            >
                <h3
                    text="lg capitalize"
                    m="b-10px"
                    font="medium"
                    line="clamp-2"
                    hover="text-blue-600"
                    transition="~"
                >
                    <NuxtLink>
                        Product 1
                    </NuxtLink>
                </h3>

                <div m="t-10px">
                    <span text="sm">200.000đ</span>
                    <span
                        text="sm red-600 line-through"
                        p="l-2"
                    >200.000đ</span>
                </div>
            </div>

            <CoreProductQuantity />
        </div>
    </div>
</template>
