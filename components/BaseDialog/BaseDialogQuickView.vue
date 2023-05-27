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
    <Teleport to="body">
        <TheOverplay
            :show-overplay="modelValue"
            @click="emits('update:modelValue', false)"
        />

        <Transition name="dialog">
            <div
                v-if="modelValue"
                w:pos="fixed inset-0"
                w:z="1100"
                w:overflow="auto"
            >
                <div
                    w:display="flex"
                    w:flex="justify-center items-center"
                    w:min-h="screen"
                >
                    <div
                        w:w="full"
                        w:max-w="md:60% sm:70% 95%"
                        w:bg="white"
                        w:border="rounded-md"
                    >
                        <div
                            w:text="right gray-400"
                            w:p="3"
                        >
                            <Icon
                                name="mdi:close"
                                size="24"
                                @click="emits('update:modelValue', false)"
                            />
                        </div>

                        <div
                            w:grid="~ cols-2 gap-4"
                            w:m="t-4"
                            w:p="4"
                        >
                            <div w:grid="lg:col-span-1 col-span-2">
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
                            </div>

                            <div w:grid="lg:col-span-1 col-span-2">
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
                                    w:grid="gap-1"
                                    w:m="t-3"
                                >
                                    <li
                                        w:display="flex"
                                        w:flex="items-center"
                                        w:grid="gap-3"
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
                                            w:font="semibold"
                                            w:case="capital"
                                            w:text="blue-600"
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

                                <div w:m="t-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci animi assumenda corporis delectus, dolores ducimus est harum iste iusto non obcaecati, repellat reprehenderit voluptas voluptatibus. Assumenda laborum repudiandae velit!
                                </div>

                                <div w:m="t-3">
                                    <div w:grid="~ cols-2 gap-3">
                                        <div w:grid="col-span-1">
                                            <button
                                                type="button"
                                                w:bg="blue-600"
                                                w:text="white"
                                                w:p="2"
                                                w:w="full"
                                                w:display="flex"
                                                w:flex="justify-center items-center wrap"
                                                w:grid="gap-2"
                                                w:case="capital"
                                                w:border="rounded-md"
                                                w:hover:bg="blue-700"
                                                w:transition="~"
                                            >
                                                <Icon
                                                    name="mdi:shopping-outline"
                                                    size="18"
                                                />

                                                {{ $t('Cart.Add') }}
                                            </button>
                                        </div>

                                        <div w:grid="col-span-1">
                                            <button
                                                type="button"
                                                w:bg="red-600"
                                                w:text="white"
                                                w:p="2"
                                                w:w="full"
                                                w:display="flex"
                                                w:flex="justify-center items-center wrap"
                                                w:grid="gap-2"
                                                w:case="capital"
                                                w:border="rounded-md"
                                                w:hover:bg="red-700"
                                                w:transition="~"
                                            >
                                                <Icon
                                                    name="mdi:heart-outline"
                                                    size="18"
                                                />

                                                {{ $t('WishList.Add') }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style lang="scss" scoped>
.dialog-enter-active {
    animation: scale-in 0.5s;
}

.dialog-leave-active {
    animation: scale-in 0.5s reverse;
}

@keyframes scale-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}
</style>
