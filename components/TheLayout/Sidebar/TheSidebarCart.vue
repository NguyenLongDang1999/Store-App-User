<script setup lang="ts">

// ** Props & Emits
import navItems from '~/utils/navigations'

interface Props {
    modelValue: boolean
}

interface Emits {
    (event: 'update:modelValue', payload: boolean): boolean
}

defineProps<Props>()

const emits = defineEmits<Emits>()

// ** Data
const cartData = reactive([])
</script>

<template>
    <VNavigationDrawer
        temporary
        width="480"
        location="right"
        :model-value="modelValue"
        @update:model-value="emits('update:modelValue', false)"
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
                {{ $t('Cart.Title') }}
            </h3>

            <div
                w:p="2"
                w:cursor="pointer"
                w:border="rounded-full"
                w:hover="bg-blue-600 text-white"
                w:transition="~"
                @click="emits('update:modelValue', false)"
            >
                <VIcon
                    icon="mdi:mdi-close"
                    size="24"
                />
            </div>
        </div>

        <VDivider />

        <div w:p="4">
            <div v-if="cartData.length">
                <ul
                    w:display="flex"
                    w:flex="col"
                    w:grid="gap-3"
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
                    w:w="full"
                    w:bg="white"
                    w:p="t-5"
                    w:border="t-1 t-gray-200"
                >
                    <div
                        w:display="flex"
                        w:flex="items-center justify-between"
                        w:m="b-4"
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

                    <VRow>
                        <VCol cols="6">
                            <VBtn
                                :text="$t('Cart.View')"
                                variant="elevated"
                                w:case="!capital"
                                color="blue"
                                size="large"
                                block
                            />
                        </VCol>

                        <VCol cols="6">
                            <VBtn
                                :text="$t('Cart.Checkout')"
                                variant="elevated"
                                w:case="!capital"
                                color="error"
                                size="large"
                                block
                            />
                        </VCol>
                    </VRow>
                </div>
            </div>

            <BaseEmptyCart v-else />
        </div>
    </VNavigationDrawer>
</template>
