<script setup lang="ts">

// ** Props & Emits
interface Props {
    modelValue: boolean
}

interface Emits {
    (event: 'update:modelValue', payload: boolean): boolean
}

defineProps<Props>()

const emits = defineEmits<Emits>()

// ** Data
const cartData = reactive([
    {
        id: 1,
        category: 'Category 1',
        name: 'Product Bạn đã được MIỄN PHÍ VẬN CHUYỂN 1',
        qty: '1',
        price: '30.000đ'
    },
    {
        id: 2,
        category: 'Category 2',
        name: 'Product Áo len dài tay 2',
        qty: '4',
        price: '60.000đ'
    }
])
</script>

<template>
    <Teleport to="body">
        <TheOverplay
            :show-overplay="modelValue"
            @click="emits('update:modelValue', false)"
        />

        <Transition name="sidebar">
            <TheSidebar
                v-if="modelValue"
                :close="() => emits('update:modelValue', false)"
                :title="$t('Cart.Title')"
            >
                <div v-if="cartData.length">
                    <ul
                        w:display="flex"
                        w:flex="col"
                        w:grid="gap-3"
                        w:h="screen"
                        w:overflow="y-auto"
                        w:scrollbar="~ track-radius-10px track-margin-left-10px w-4px h-3px radius-10px"
                    >
                        <li
                            v-for="item in cartData"
                            :key="item.id"
                            w:border="b-1 b-gray-100"
                            w:p="b-3"
                        >
                            <BaseProductCartItem :product="item" />
                        </li>
                    </ul>

                    <div
                        w:pos="sticky bottom-0"
                        w:w="full"
                        w:bg="white"
                        w:p="t-5"
                        w:border="t-1 t-gray-200"
                    >
                        <div
                            w:display="flex"
                            w:flex="items-center justify-between"
                        >
                            <span
                                w:case="upper"
                                w:text="16px"
                                w:font="medium"
                            >
                                {{ $t('Cart.Total') }}
                            </span>

                            <span
                                w:text="xl blue-600"
                                w:font="semibold"
                            >
                                300.000đ
                            </span>
                        </div>

                        <div
                            w:display="flex"
                            w:grid="gap-3"
                        >
                            <BaseFormButton
                                :text="$t('Cart.View')"
                                w:bg="blue-600 hover:blue-700"
                                w:text="white"
                                block
                            />

                            <BaseFormButton
                                :text="$t('Cart.Checkout')"
                                w:bg="red-600 hover:red-700"
                                w:text="white"
                                block
                            />
                        </div>
                    </div>
                </div>

                <BaseEmptyCart v-else />
            </TheSidebar>
        </Transition>
    </Teleport>
</template>

<style lang="scss" scoped>
.sidebar-enter-active,
.sidebar-leave-active {
    transition: transform 0.5s ease;
}

.sidebar-enter-from,
.sidebar-leave-to {
    transform: translateX(104%);
}
</style>
