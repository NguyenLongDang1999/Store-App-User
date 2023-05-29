<script setup lang="ts">

// ** Third Party Imports
import type { SwiperOptions } from 'swiper'

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
const swiper = ref<SwiperOptions | null>(null)
</script>

<template>
    <VDialog
        :model-value="modelValue"
        max-width="960"
        @update:model-value="emits('update:modelValue', false)"
    >
        <VCard>
            <VCardTitle>
                <div
                    w:text="right gray-400"
                    w:p="3"
                >
                    <VIcon
                        icon="mdi:mdi-close"
                        size="24"
                        @click="emits('update:modelValue', false)"
                    />
                </div>
            </VCardTitle>

            <VCardItem>
                <VRow no-gutters>
                    <VCol md="6">
                        <VCardText class="text-center">
                            <Swiper
                                :modules="[SwiperThumbs, SwiperFreeMode]"
                                :space-between="10"
                                :slides-per-view="1"
                                :thumbs="{ swiper }"
                                loop
                            >
                                <SwiperSlide>
                                    <NuxtImg
                                        src="https://placehold.co/480x480/999/31343C"
                                        alt="Slider"
                                        width="480"
                                        height="480"
                                    />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <NuxtImg
                                        src="https://placehold.co/480x480/000/31343C"
                                        alt="Slider"
                                        width="480"
                                        height="480"
                                    />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <NuxtImg
                                        src="https://placehold.co/480x480/EEE/31343C"
                                        alt="Slider"
                                        width="480"
                                        height="480"
                                    />
                                </SwiperSlide>
                            </Swiper>

                            <Swiper
                                :modules="[SwiperThumbs, SwiperFreeMode]"
                                :space-between="10"
                                :slides-per-view="4"
                                free-mode
                                watch-slides-progress
                                w:m="t-3"
                                @swiper="(s) => swiper = s"
                            >
                                <SwiperSlide>
                                    <NuxtImg
                                        src="https://placehold.co/480x480/999/31343C"
                                        alt="Slider"
                                        width="480"
                                        height="480"
                                    />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <NuxtImg
                                        src="https://placehold.co/480x480/000/31343C"
                                        alt="Slider"
                                        width="480"
                                        height="480"
                                    />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <NuxtImg
                                        src="https://placehold.co/480x480/EEE/31343C"
                                        alt="Slider"
                                        width="480"
                                        height="480"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </VCardText>
                    </VCol>

                    <VCol md="6">
                        <VCardText>
                            <h4
                                w:case="capital"
                                w:font="bold"
                                w:text="lg"
                            >
                                Lorem ipsum dolor sit amet, coimilique soluta temporibus voluptatem.
                            </h4>

                            <ul
                                w:display="flex"
                                w:flex="col"
                                w:grid="gap-2"
                                w:m="t-3"
                            >
                                <li
                                    w:display="flex"
                                    w:flex="items-center"
                                    w:grid="gap-2"
                                >
                                    <span>{{ $t('Product.Price') }}:</span>
                                    <span
                                        w:font="bold"
                                        w:case="capital"
                                        w:text="blue-600 xl"
                                    >500.000đ</span>

                                    <span
                                        w:font="semibold"
                                        w:case="capital"
                                        w:text="red-600"
                                        w:decoration="line-through"
                                    >800.000đ</span>
                                </li>

                                <li
                                    w:display="flex"
                                    w:flex="items-center"
                                    w:grid="gap-3"
                                >
                                    <span>{{ $t('Product.Status') }}:</span>
                                    <span
                                        w:text="blue-600"
                                        w:font="semibold"
                                        w:case="capital"
                                    >Còn hàng</span>
                                </li>

                                <li
                                    w:display="flex"
                                    w:flex="items-center"
                                    w:grid="gap-3"
                                >
                                    <span>{{ $t('Product.Sku') }}:</span>
                                    <span w:font="semibold">SKU-123</span>
                                </li>

                                <li
                                    w:display="flex"
                                    w:flex="items-center"
                                    w:grid="gap-3"
                                >
                                    <span>{{ $t('Product.Category') }}:</span>
                                    <span
                                        w:font="semibold"
                                        w:case="capital"
                                    >Danh mục 1</span>
                                </li>

                                <li
                                    w:display="flex"
                                    w:flex="items-center"
                                    w:grid="gap-3"
                                >
                                    <span>{{ $t('Product.Brand') }}:</span>
                                    <span
                                        w:font="semibold"
                                        w:case="capital"
                                    >Thương hiệu 1</span>
                                </li>
                            </ul>

                            <div
                                w:text="medium"
                                w:m="t-3 b-5"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci animi assumenda corporis delectus, dolores ducimus est harum iste iusto non obcaecati, repellat reprehenderit voluptas voluptatibus. Assumenda laborum repudiandae velit!
                            </div>

                            <VRow>
                                <VCol
                                    cols="12"
                                    sm="6"
                                >
                                    <VBtn
                                        :text="$t('Cart.Add')"
                                        variant="elevated"
                                        prepend-icon="mdi-shopping-outline"
                                        w:case="!capital"
                                        color="blue"
                                        size="large"
                                        block
                                    />
                                </VCol>

                                <VCol
                                    cols="12"
                                    sm="6"
                                >
                                    <VBtn
                                        :text="$t('WishList.Add')"
                                        variant="elevated"
                                        prepend-icon="mdi-heart-outline"
                                        w:case="!capital"
                                        color="error"
                                        size="large"
                                        block
                                    />
                                </VCol>
                            </VRow>
                        </VCardText>
                    </VCol>
                </VRow>
            </VCardItem>
        </VCard>
    </VDialog>
</template>
