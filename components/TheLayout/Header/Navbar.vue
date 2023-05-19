<script setup lang="ts">

// ** Utils Imports
import navItems from '~~/utils/navigations'

// ** useHooks
const { isLarge, isDesktop } = useMedia()
</script>

<template>
    <nav class="py-3">
        <TheContainer>
            <div class="grid grid-cols-12 gap-4 items-center">
                <div class="col-span-3">
                    <button
                        type="button"
                        class="border-0 flex items-center bg-blue-600 text-white rounded-lg py-2 px-4 transition-all hover:bg-blue-700"
                        data-hs-overlay="#hs-overplay-category"
                        aria-controls="hs-overplay-category"
                        aria-label="Toggle category"
                    >
                        <Icon
                            name="bx:align-left"
                            size="24"
                        />

                        <span
                            v-if="isLarge"
                            class="pl-2 capitalize"
                        >{{ $t('Category.List') }}</span>
                    </button>
                </div>

                <div class="col-span-9">
                    <template v-if="isDesktop">
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
                            <li class="relative">
                                <TheTooltip
                                    :title="$t('Auth.Name')"
                                    placement="bottom"
                                >
                                    <TheIconBadge
                                        name="bx:user"
                                        size="28"
                                    />
                                </TheTooltip>
                            </li>

                            <li class="relative">
                                <TheTooltip
                                    :title="$t('Search.Product')"
                                    placement="bottom"
                                >
                                    <TheIconBadge
                                        name="bx:search"
                                        size="28"
                                        data-hs-overlay="#hs-search"
                                    />
                                </TheTooltip>
                            </li>

                            <li class="relative">
                                <TheTooltip
                                    :title="$t('WishList.Product')"
                                    placement="bottom"
                                >
                                    <TheIconBadge
                                        name="bx:heart"
                                        size="28"
                                        :count="4"
                                    />
                                </TheTooltip>
                            </li>

                            <li class="relative">
                                <TheTooltip
                                    :title="$t('Cart.Title')"
                                    placement="bottom"
                                >
                                    <TheIconBadge
                                        name="bx:basket"
                                        size="28"
                                        :count="3"
                                        data-hs-overlay="#hs-overplay-cart"
                                    />
                                </TheTooltip>
                            </li>

                            <li class="relative">
                                <TheTooltip
                                    :title="$t('Menu.Name')"
                                    placement="bottom"
                                >
                                    <TheIconBadge
                                        name="bx:list-ul"
                                        size="28"
                                        :count="3"
                                        data-hs-overlay="#hs-overplay-menu"
                                        aria-controls="hs-overplay-menu"
                                        aria-label="Toggle menu"
                                    />
                                </TheTooltip>
                            </li>
                        </ul>
                    </template>
                </div>
            </div>
        </TheContainer>
    </nav>
</template>
