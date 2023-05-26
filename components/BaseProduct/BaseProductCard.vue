<script setup lang="ts">

// ** Data
const showProduct = ref<boolean>(false)
</script>

<template>
    <div
        w:display="flex"
        w:flex="col"
        w:grid="gap-2"
        class="group"
        w:transition="~"
    >
        <div w:pos="relative">
            <NuxtLink>
                <NuxtImg
                    src="https://placehold.co/360x480/EEE/31343C"
                    alt="Product"
                    width="360"
                    height="480"
                />
            </NuxtLink>

            <ul
                w:pos="absolute bottom-3 left-[50%]"
                w:display="flex"
                w:grid="gap-2"
                w:transform="~ translate-x--1/2 md:translate-y-20 translate-y-0"
                w:opacity="md:0 100"
                w:transition="transform"
                w:group-hover:transform="translate-y-0"
                w:group-hover:opacity="100"
            >
                <li
                    v-tooltip.top="$t('Cart.Add')"
                    w:border="rounded-full"
                    w:w="9"
                    w:h="9"
                    w:font="leading-9"
                    w:bg="black"
                    w:text="center white"
                    w:transition="~"
                    w:hover:bg="gray-800"
                    w:cursor="pointer"
                >
                    <Icon
                        name="mdi:shopping-outline"
                        size="18"
                    />
                </li>

                <li
                    v-tooltip.top="$t('QuickView')"
                    w:border="rounded-full"
                    w:w="9"
                    w:h="9"
                    w:font="leading-9"
                    w:bg="black"
                    w:text="center white"
                    w:transition="~"
                    w:hover:bg="gray-800"
                    w:cursor="pointer"
                    @click="showProduct = true"
                >
                    <Icon
                        name="mdi:eye-outline"
                        size="18"
                    />
                </li>

                <li
                    v-tooltip.top="$t('WishList.Add')"
                    w:border="rounded-full"
                    w:w="9"
                    w:h="9"
                    w:font="leading-9"
                    w:bg="black"
                    w:text="center white"
                    w:transition="~"
                    w:hover:bg="gray-800"
                    w:cursor="pointer"
                >
                    <Icon
                        name="mdi:heart-outline"
                        size="18"
                    />
                </li>
            </ul>
        </div>

        <p w:font="normal">
            <NuxtLink
                v-tooltip.bottom="'Category'"
                w:line="line-clamp-1"
            >
                Category
            </NuxtLink>
        </p>

        <h3 w:font="semibold">
            <NuxtLink
                v-tooltip.bottom="'Product'"
                w:line="clamp-2"
            >
                Product Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi asperiores ea eligendi expedita hic illum, impedit magni molestiae quidem veniam, voluptates? Beatae eligendi eos est molestias rem ut veritatis.
            </NuxtLink>
        </h3>

        <div
            w:display="flex"
            w:grid="gap-3"
        >
            <span
                w:text="gray-800"
                w:font="bold"
            >500.000đ</span>

            <span
                w:decoration="line-through"
                w:text="gray-400"
                w:font="normal"
            >900.000đ</span>
        </div>

        <LazyBaseDialogQuickView v-model="showProduct" />
    </div>
</template>
