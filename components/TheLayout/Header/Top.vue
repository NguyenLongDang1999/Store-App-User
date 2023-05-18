<script setup lang="ts">

// ** Data
const search = ref<string>('')
</script>

<template>
    <div class="border-b border-solid border-b-[#eee]">
        <TheContainer>
            <div class="grid grid-cols-12 gap-4 items-center">
                <div class="md:col-span-3 col-span-6">
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

                <div class="md:col-span-6 col-span-6">
                    <BaseFormSearch v-model="search" />
                </div>

                <div class="col-span-3 md:block hidden">
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
                                    count="4"
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
                                    count="3"
                                    data-hs-overlay="#hs-overplay-cart"
                                />
                            </TheTooltip>
                        </li>
                    </ul>
                </div>
            </div>
        </TheContainer>
    </div>
</template>
