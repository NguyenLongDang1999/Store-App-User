<script setup lang="ts">

// ** Props & Emits
interface Props {
    isOpen: boolean
}

interface Emits {
    (event: 'close', payload: boolean): boolean
}

defineProps<Props>()

const emits = defineEmits<Emits>()
</script>

<template>
    <Teleport to="body">
        <TransitionGroup>
            <LazyCoreTheOverplay
                v-if="isOpen"
                @click="emits('close', false)"
            />

            <aside
                v-if="isOpen"
                pos="fixed top-0 bottom-0 right-0"
                w="600px <sm:full"
                bg="white"
                z="100"
                p="y-5 x-7"
                opacity="100"
                transition="all duration-500"
                display="visible"
                overflow="auto"
            >
                <div
                    display="flex"
                    justify="between"
                    align="items-center"
                    border="b-2px solid light-600"
                    p="b-5"
                >
                    <h2
                        text="xl dark-600 capitalize"
                        font="semibold"
                    >
                        {{ $t('Cart.Title') }}
                    </h2>

                    <button
                        type="button"
                        display="flex"
                        justify="center"
                        align="items-center"
                        w="35px"
                        h="35px"
                        border="rounded-1/2"
                        bg="light-600"
                        text="dark-500"
                        hover="bg-blue-600 text-white"
                        transition="~"
                        @click="emits('close', false)"
                    >
                        <Icon
                            name="ph:x"
                            size="12"
                        />
                    </button>
                </div>

                <ul p="t-6">
                    <li
                        v-for="item in 4"
                        :key="item"
                        border="b-1px solid light-600"
                        m="b-30px"
                        p="b-30px"
                    >
                        <CartProduct :item="item" />
                    </li>
                </ul>

                <h3
                    m="t-22px x-0 b-30px"
                    text="lg"
                    font="semibold"
                    display="flex"
                    justify="between"
                    align="items-center"
                >
                    <span text="capitalize">{{ $t('Cart.Total') }}</span>
                    <span>600.000đ</span>
                </h3>

                <div
                    display="flex"
                    flex="wrap"
                    grid="gap-5"
                >
                    <div
                        border="rounded-md"
                        text="lg white center capitalize"
                        bg="blue-600"
                        p="y-16px x-38px"
                        w="full"
                        flex="1"
                        cursor="pointer"
                        hover="opacity-95"
                    >
                        <NuxtLink>
                            {{ $t('Cart.View') }}
                        </NuxtLink>
                    </div>

                    <div
                        border="rounded-md"
                        text="lg white center capitalize"
                        bg="red-600"
                        p="y-16px x-38px"
                        w="full"
                        flex="1"
                        cursor="pointer"
                        hover="opacity-95"
                    >
                        <NuxtLink>
                            {{ $t('Cart.Checkout') }}
                        </NuxtLink>
                    </div>
                </div>
            </aside>
        </TransitionGroup>
    </Teleport>
</template>

<style lang="scss" scoped>
.v-enter-from,
.v-leave-to {
    opacity: 0;
    visibility: hidden;
    right: -600px;
}
</style>
