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
                    <VTooltip
                        location="left"
                        :text="$t('Cart.Delete')"
                    >
                        <template #activator="{ props }">
                            <VBtn
                                color="red"
                                size="large"
                                v-bind="props"
                                variant="tonal"
                                density="compact"
                                icon="mdi-delete-outline"
                            />
                        </template>
                    </VTooltip>

                    <span w:font="semibold">{{ product.price }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
