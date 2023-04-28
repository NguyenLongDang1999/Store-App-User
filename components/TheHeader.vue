<script setup lang="ts">
const navItem = [
    {
        name: 'Trang chủ'
    },
    {
        name: 'Cửa hàng'
    },
    {
        name: 'Danh mục'
    },
    {
        name: 'Giới thiệu'
    },
    {
        name: 'Liên hệ'
    }
]
</script>

<template>
    <header class="py-6">
        <div class="container px-6 mx-auto">
            <div class="grid grid-cols-12 gap-4 items-center">
                <div class="col-span-2">
                    <NuxtLink to="/">
                        <NuxtImg
                            src="https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png"
                            alt="Logo"
                        />
                    </NuxtLink>
                </div>

                <div class="col-span-5">
                    <ul class="flex items-center">
                        <li
                            v-for="(nav, index) in navItem"
                            :key="index"
                            class="mx-5 capitalize font-semibold text-sm"
                        >
                            <NuxtLink to="">
                                {{ nav.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <div class="col-span-5">
                    <ul class="d-flex items-center p-0 my-0 mx-[-10px]">
                        <li>
                            <div class="relative">
                                <input
                                    type="search"
                                    class="relative h-10 outline-none border border-[#f0f0f0] rounded-lg text-sm max-w-[250px] pl-10"
                                    placeholder="Search for"
                                >

                                <button
                                    type="submit"
                                    class="absolute z-10 top-[52%] transform  -translate-y-1/2 p-0 left-4 leading-none"
                                >
                                    <Icon
                                        name="mdi-light:magnify"
                                        size="22"
                                    />
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
