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
                w:z="1000"
            >
                <div
                    w:display="flex"
                    w:flex="justify-center items-center"
                    w:min-h="screen"
                >
                    <div
                        w:w="full"
                        w:max-w="lg:50% md:60% sm:70% 95%"
                        w:bg="white"
                        w:border="rounded-md"
                        w:overflow="hidden"
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
                            <div w:grid="col-span-1">
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

                            <div w:grid="col-span-1">
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
                                        w:grid="gap-3"
                                    >
                                        <span>{{ $t('Product.Status') }}:</span>
                                        <span
                                            w:font="semibold"
                                            w:case="capital"
                                            w:bg="blue-600"
                                            w:text="white"
                                            w:border="rounded-md"
                                            w:p="y-2 x-4"
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
                                    w:m="t-3"
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci animi assumenda corporis delectus, dolores ducimus est harum iste iusto non obcaecati, repellat reprehenderit voluptas voluptatibus. Assumenda laborum repudiandae velit!
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
