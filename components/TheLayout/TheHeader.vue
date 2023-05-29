<script setup lang="ts">

// ** Third Party Imports
import { useDisplay } from 'vuetify'

// ** Utils Imports
import navItems from '~~/utils/navigations'

// ** useHooks
const { lgAndUp } = useDisplay()

// ** Data
const showMenu = ref<boolean>(false)
const showCart = ref<boolean>(false)
</script>

<template>
    <header
        w:bg="white"
        w:border="b-1 b-gray-200"
    >
        <VContainer class="fill-height py-3">
            <VRow align="center">
                <VCol lg="2">
                    <div
                        w:display="flex"
                        w:flex="items-center"
                    >
                        <VTooltip
                            location="bottom"
                            :text="$t('Menu.Name')"
                        >
                            <template #activator="{ props }">
                                <TheIconBadge
                                    v-if="!lgAndUp"
                                    v-bind="props"
                                    icon="mdi:mdi-view-headline"
                                    w:m="r-2"
                                    @click="showMenu = true"
                                />
                            </template>
                        </VTooltip>

                        <NuxtLink to="/">
                            <h1
                                w:cursor="pointer"
                                w:font="!bold"
                                w:text="!26px"
                            >
                                {{ config.title }}
                            </h1>
                        </NuxtLink>
                    </div>
                </VCol>

                <VCol
                    v-if="lgAndUp"
                    lg="8"
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
                </VCol>

                <VCol lg="2">
                    <ul
                        w:display="flex"
                        w:flex="justify-end"
                    >
                        <li>
                            <VTooltip
                                location="bottom"
                                :text="$t('Search.Product')"
                            >
                                <template #activator="{ props }">
                                    <TheIconBadge
                                        v-bind="props"
                                        icon="mdi:mdi-magnify"
                                    />
                                </template>
                            </VTooltip>
                        </li>

                        <li>
                            <VTooltip
                                location="bottom"
                                :text="$t('Auth.Name')"
                            >
                                <template #activator="{ props }">
                                    <TheIconBadge
                                        v-bind="props"
                                        icon="mdi:mdi-account-outline"
                                    />
                                </template>
                            </VTooltip>
                        </li>

                        <li>
                            <VTooltip
                                location="bottom"
                                :text="$t('WishList.Product')"
                            >
                                <template #activator="{ props }">
                                    <TheIconBadge
                                        v-bind="props"
                                        icon="mdi:mdi-heart-outline"
                                        :count="3"
                                    />
                                </template>
                            </VTooltip>
                        </li>

                        <li>
                            <VTooltip
                                location="bottom"
                                :text="$t('Cart.Title')"
                            >
                                <template #activator="{ props }">
                                    <TheIconBadge
                                        v-bind="props"
                                        icon="mdi:mdi-shopping-outline"
                                        :count="4"
                                        @click="showCart = true"
                                    />
                                </template>
                            </VTooltip>
                        </li>
                    </ul>
                </VCol>
            </VRow>
        </VContainer>

        <LazyTheSidebarMenu v-model="showMenu" />
        <LazyTheSidebarCart v-model="showCart" />
    </header>
</template>
