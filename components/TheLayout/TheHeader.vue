<script setup lang="ts">

// ** Utils Imports
import navItems from '~~/utils/navigations'

// ** useHooks
const { isGreaterOrEquals } = useViewport()

// ** Data
const showMenu = ref<boolean>(false)
const showCart = ref<boolean>(false)
</script>

<template>
    <header
        w:h="20"
        w:display="flex"
        w:flex="items-center"
        w:bg="white"
        w:pos="fixed top-0"
        w:border="b-1 b-gray-200"
        w:w="full"
        w:z="1000"
    >
        <TheContainer>
            <div
                w:grid="~ cols-8"
                w:flex="items-center"
            >
                <div w:grid="lg:col-span-2 col-span-4">
                    <div
                        w:display="flex"
                        w:flex="items-center"
                    >
                        <TheIconBadge
                            v-if="!isGreaterOrEquals('lg')"
                            v-tooltip="$t('Menu.Name')"
                            icon-name="mdi:view-headline"
                            w:m="r-2"
                            w:cursor="pointer"
                            @click="showMenu = true"
                        />

                        <h1
                            w:font="bold"
                            w:text="26px"
                        >
                            <NuxtLink to="/">
                                {{ config.title }}
                            </NuxtLink>
                        </h1>
                    </div>
                </div>

                <div
                    v-if="isGreaterOrEquals('lg')"
                    w:grid="col-span-4"
                >
                    <ul
                        w:display="flex"
                        w:flex="items-center justify-center"
                        w:grid="gap-5"
                    >
                        <li
                            v-for="nav in navItems"
                            :key="nav.to"
                        >
                            <NuxtLink
                                :to="localePath({ name: nav.name })"
                                w:font="tracking-wider semibold"
                                w:text="black"
                                w:case="capital"
                                w:transition="text duration-300 ease-in-out"
                                w:hover="text-blue-600"
                                active-class="!text-blue-600"
                            >
                                {{ $t(`Navigation.${nav.title}`) }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <div w:grid="lg:col-span-2 col-span-4">
                    <ul
                        w:display="flex"
                        w:flex="justify-end"
                    >
                        <li>
                            <TheIconBadge
                                v-tooltip="$t('Search.Product')"
                                icon-name="mdi:magnify"
                            />
                        </li>

                        <li>
                            <TheIconBadge
                                v-tooltip="$t('Auth.Name')"
                                icon-name="mdi:account-outline"
                            />
                        </li>

                        <li>
                            <TheIconBadge
                                v-tooltip="$t('WishList.Product')"
                                icon-name="mdi:heart-outline"
                                :count="3"
                            />
                        </li>

                        <li>
                            <TheIconBadge
                                v-tooltip="$t('Cart.Title')"
                                icon-name="mdi:shopping-outline"
                                :count="4"
                                @click="showCart = true"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </TheContainer>

        <LazyTheSidebarMenu v-model="showMenu" />
        <LazyTheSidebarCart v-model="showCart" />
    </header>
</template>
