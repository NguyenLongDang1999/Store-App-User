<script setup lang="ts">

// ** Props & Emits
interface Props {
    readonly product: number
}

defineProps<Props>()

// ** Data
const showProduct = ref<boolean>(false)
</script>

<template>
    <div class="p-3 border border-solid border-gray-100 rounded-lg group">
        <div class="mb-3 relative">
            <NuxtLink>
                <NuxtImg
                    src="https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-html/assets/images/product-image/6_1.jpg"
                    :alt="`Product-${product}`"
                    width="290"
                    height="320"
                    class="w-full rounded"
                />

                <div class="absolute top-3 right-3 overflow-hidden">
                    <ul class="flex flex-col gap-1 transition-all duration-500 transform md:translate-y-[-100px] md:opacity-0 md:invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                        <li
                            v-tooltip.left="$t('Cart.Title')"
                            class="bg-white border border-solid border-gray-200 w-8 h-8 leading-7 cursor-pointer text-center rounded"
                        >
                            <Icon
                                name="bx:basket"
                                size="17"
                            />
                        </li>

                        <li
                            v-tooltip.left="$t('WishList.Product')"
                            class="bg-white border border-solid border-gray-200 w-8 h-8 leading-7 cursor-pointer text-center rounded"
                        >
                            <Icon
                                name="bx:heart"
                                size="16"
                            />
                        </li>

                        <li
                            v-tooltip.left="$t('QuickView')"
                            class="bg-white border border-solid border-gray-200 w-8 h-8 leading-7 cursor-pointer text-center rounded"
                            @click="showProduct = true"
                        >
                            <Icon
                                name="bx:show"
                                size="17"
                            />
                        </li>
                    </ul>
                </div>
            </NuxtLink>
        </div>

        <div class="tracking-wide">
            <h6 class="mb-2">
                <NuxtLink class="text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis block md:text-sm text-[12px] font-normal capitalize">
                    Category-{{ product }}
                </NuxtLink>
            </h6>

            <h5
                v-tooltip.bottom="`Product-${product}`"
                class="text-lg mb-2"
            >
                <NuxtLink class="line-clamp-2 text-gray-500 md:text-[16px] text-sm font-normal capitalize hover:text-primary-600 transition duration-300">
                    Product-{{ product }} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorum ea enim excepturi illo inventore laborum minima necessitatibus, numquam, optio, quia recusandae! Consequuntur eaque facere maiores nam nobis repudiandae sed!
                </NuxtLink>
            </h5>

            <div class="flex flex-wrap items-center gap-2">
                <span class="text-gray-700 font-bold">300.000đ</span>
                <span class="line-through text-gray-500 font-light">600.000đ</span>
            </div>
        </div>

        <LazyBaseDialogQuickView
            v-model="showProduct"
            :product="1"
        />
    </div>
</template>
