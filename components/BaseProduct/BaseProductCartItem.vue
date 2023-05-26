<script setup lang="ts">

// ** Props & Emits
interface Props {
    product: {
        id: number
        category: string
        name: string
        qty: string
        price: string
    }
}

defineProps<Props>()
</script>

<template>
    <div w:grid="~ cols-6 gap-3">
        <div w:grid="col-span-1">
            <NuxtLink>
                <NuxtImg
                    src="https://placehold.co/78x100/EEE/31343C"
                    alt="Product"
                    width="78"
                    height="100"
                />
            </NuxtLink>
        </div>

        <div
            w:grid="col-span-5"
            w:display="flex"
            w:flex="justify-between"
        >
            <div w:flex="basis-4/5">
                <h6 w:font="normal">
                    <NuxtLink
                        w:case="capital"
                        w:line="clamp-1"
                    >
                        {{ product.category }}
                    </NuxtLink>
                </h6>

                <h5
                    w:font="semibold"
                    w:h="10"
                >
                    <NuxtLink
                        w:case="capital"
                        w:line="clamp-2"
                    >
                        {{ product.name }}
                    </NuxtLink>
                </h5>

                <div>
                    <BaseFormInputNumber v-model="product.qty" />
                </div>
            </div>

            <div
                w:flex="basis-1/5"
                w:text="right"
                w:m="r-2"
            >
                <div
                    w:display="flex"
                    w:h="full"
                    w:flex="col items-end justify-between"
                >
                    <button
                        v-tooltip.left="$t('Cart.Delete')"
                        w:w="8"
                        w:h="8"
                        w:font="leading-4"
                        w:border="rounded-full"
                        w:bg="red-500"
                        w:text="white center"
                        w:hover="bg-red-600"
                        w:transition="~"
                    >
                        <Icon
                            name="mdi:trash-outline"
                            size="16"
                        />
                    </button>

                    <span w:font="semibold">{{ product.price }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
