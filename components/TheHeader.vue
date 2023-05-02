<script setup lang="ts">

// ** Utils Imports
import navItems from '~~/utils/navigations'

// ** useHook
const localePath = useLocalePath()

// ** Data
const target = ref(null)
const isOpen = ref<boolean>(false)
const isOpenCart = ref<boolean>(false)

onClickOutside(target, event => console.log(event))
</script>

<template>
    <header p="y-6">
        <div
            m="x-auto"
            p="x-4"
            container="~"
        >
            <div
                display="grid"
                grid="cols-12 gap-4"
                align="items-center"
            >
                <div grid="col-span-2 <lg:col-span-4">
                    <NuxtLink to="/">
                        <NuxtImg
                            src="https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png"
                            alt="Logo"
                        />
                    </NuxtLink>
                </div>

                <div
                    grid="col-span-5 <xl:col-span-6"
                    display="<lg:hidden"
                >
                    <ul
                        display="flex"
                        justify="center"
                        align="items-center"
                        grid="gap-5"
                    >
                        <li
                            v-for="nav in navItems"
                            :key="nav.to"
                            text="sm capitalize"
                            font="semibold"
                        >
                            <NuxtLink
                                :to="localePath({ name: nav.name })"
                                pos="relative"
                                before="content-DEFAULT w-0 h-[2px] absolute top-6 left-0 bg-black duration-500 opacity-0"
                                hover="before:w-full before:opacity-100"
                            >
                                {{ $t(`Navigation.${nav.title}`) }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <div grid="col-span-5 <xl:col-span-4 <lg:col-span-8">
                    <ul
                        display="flex"
                        align="items-center"
                        p="0"
                        m="y-0"
                        justify="end"
                    >
                        <li
                            m="r-3"
                            display="block <xl:hidden"
                        >
                            <div pos="relative">
                                <input
                                    type="search"
                                    h="10"
                                    border="[#f0f0f0] rounded-lg"
                                    outline="none"
                                    text="sm"
                                    w="max-w-[250px] [270px]"
                                    p="l-10"
                                >

                                <button
                                    type="submit"
                                    pos="absolute top-[52%] left-4"
                                    transform="~ -translate-y-1/2"
                                    p="0"
                                    z="10"
                                    font="leading-none"
                                >
                                    <Icon
                                        name="ph:magnifying-glass"
                                        size="22"
                                    />
                                </button>
                            </div>
                        </li>

                        <li
                            m="x-3"
                            display="hidden <xl:block"
                        >
                            <HeaderTheIcon name="ph:magnifying-glass" />
                        </li>

                        <li m="x-3">
                            <HeaderTheIcon
                                name="ph:heart-straight"
                                :badge="1"
                            />
                        </li>

                        <li m="x-3">
                            <HeaderTheIcon
                                name="ph:shopping-cart"
                                :badge="3"
                                @click="isOpenCart = true"
                            />
                        </li>

                        <li m="x-3">
                            <HeaderTheIcon name="ph:user-circle" />
                        </li>

                        <li
                            m="x-3"
                            display="hidden <lg:block"
                        >
                            <HeaderTheIcon
                                name="ph:list"
                                @click="isOpen = true"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <LazySidebarTheMenu
            :is-open="isOpen"
            @close="(val: boolean) => isOpen = val"
        />

        <LazySidebarTheShoppingCart
            :is-open="isOpenCart"
            @close="(val: boolean) => isOpenCart = val"
        />
    </header>
</template>
