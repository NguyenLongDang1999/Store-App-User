<script setup lang="ts">

// ** Utils Imports
import navItems from '~~/utils/navigations'

// ** useHooks
const { isGreaterOrEquals, isLessThan } = useViewport()
const localePath = useLocalePath()

// ** Data
const showCart = ref<boolean>(false)
const showMenu = ref<boolean>(false)
const showSearch = ref<boolean>(false)
const showCategory = ref<boolean>(false)
</script>

<template>
    <nav class="py-3">
        <TheContainer>
            <div class="grid grid-cols-12 gap-4 items-center">
                <div class="col-span-3">
                    <button
                        type="button"
                        class="border-0 flex items-center bg-blue-600 text-white rounded-lg py-2 px-4 transition-all hover:bg-blue-700"
                        @click="showCategory = true"
                    >
                        <Icon
                            name="bx:align-left"
                            size="24"
                        />

                        <span
                            v-if="isGreaterOrEquals('lg')"
                            class="pl-2 capitalize"
                        >{{ $t('Category.List') }}</span>
                    </button>
                </div>

                <div class="col-span-9">
                    <template v-if="isGreaterOrEquals('md')">
                        <ul class="flex gap-4">
                            <li
                                v-for="nav in navItems"
                                :key="nav.to"
                            >
                                <NuxtLink
                                    :to="localePath({ name: nav.name })"
                                    active-class="text-blue-600"
                                    class="text-sm text-[#444] capitalize font-medium transition-all hover:text-blue-600"
                                >
                                    {{ $t(`Navigation.${nav.title}`) }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </template>

                    <template v-else>
                        <ul class="flex justify-end gap-6">
                            <li
                                v-tooltip.bottom="$t('Auth.Name')"
                                class="relative"
                            >
                                <TheIconBadge
                                    name="bx:user"
                                    size="28"
                                />
                            </li>

                            <li
                                v-if="isLessThan('sm')"
                                v-tooltip.bottom="$t('Search.Product')"
                                class="relative"
                                @click="showSearch = true"
                            >
                                <TheIconBadge
                                    name="bx:search"
                                    size="28"
                                />
                            </li>

                            <li
                                v-if="isGreaterOrEquals('sm')"
                                v-tooltip.bottom="$t('WishList.Product')"
                                class="relative"
                            >
                                <TheIconBadge
                                    name="bx:heart"
                                    size="28"
                                    :count="4"
                                />
                            </li>

                            <li
                                v-if="isGreaterOrEquals('sm')"
                                v-tooltip.bottom="$t('Cart.Title')"
                                class="relative"
                                @click="showCart = true"
                            >
                                <TheIconBadge
                                    name="bx:basket"
                                    size="28"
                                    :count="3"
                                />
                            </li>

                            <li
                                v-if="isGreaterOrEquals('sm')"
                                v-tooltip.bottom="$t('Menu.Name')"
                                class="relative"
                                @click="showMenu = true"
                            >
                                <TheIconBadge
                                    name="bx:list-ul"
                                    size="28"
                                />
                            </li>
                        </ul>
                    </template>
                </div>
            </div>
        </TheContainer>

        <LazyTheSidebarCart v-model="showCart" />
        <LazyTheSidebarMenu v-model="showMenu" />
        <LazyTheSidebarSearch v-model="showSearch" />
        <LazyTheSidebarCategory v-model="showCategory" />
    </nav>
</template>
