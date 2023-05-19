<script setup lang="ts">

// ** Data
const search = ref<string>('')
const cartDialog = ref<boolean>(false)

// ** useHooks
const { isDesktop, isTablet } = useMedia()
</script>

<template>
    <div class="border-b border-solid border-b-[#eee]">
        <TheContainer>
            <div class="grid grid-cols-12 gap-4 items-center">
                <div class="md:col-span-3 sm:col-span-6 sm:justify-start justify-center flex col-span-12">
                    <div class="py-[25px]">
                        <NuxtLink to="/">
                            <NuxtImg
                                src="https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-html/assets/images/logo/logo.png"
                                alt="Logo"
                                width="130"
                                placeholder
                            />
                        </NuxtLink>
                    </div>
                </div>

                <div
                    v-if="isTablet"
                    class="col-span-6"
                >
                    <BaseFormSearch v-model="search" />
                </div>

                <div
                    v-if="isDesktop"
                    class="col-span-3"
                >
                    <ul class="flex justify-end lg:gap-8 gap-4">
                        <li class="relative">
                            <TheIconBadge
                                name="bx:user"
                                size="28"
                            />
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

                        <li
                            class="relative"
                            @click="cartDialog = true"
                        >
                            <TheTooltip
                                :title="$t('Cart.Title')"
                                placement="bottom"
                            >
                                <TheIconBadge
                                    name="bx:basket"
                                    size="28"
                                    :count="3"
                                />
                            </TheTooltip>
                        </li>
                    </ul>
                </div>
            </div>
        </TheContainer>

        <LazyTheLayoutCart v-model="cartDialog" />
    </div>
</template>
