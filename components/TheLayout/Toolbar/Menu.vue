<script setup lang="ts">

// ** useHooks
const { isMobile } = useMedia()

// ** Data
const showCart = ref<boolean>(false)
const showMenu = ref<boolean>(false)
</script>

<template>
    <Teleport to="body">
        <div
            v-if="isMobile"
            class="fixed bottom-0 left-0 right-0 z-20 overflow-y-hidden justify-between bg-white h-16 p-[5px] shadow-[0_0_5px_rgba(61,61,61,.2)] inline-flex"
        >
            <TheContainer>
                <ul class="flex justify-between items-center h-full">
                    <li @click="showMenu = true">
                        <TheIconBadge
                            name="bx:list-ul"
                            size="28"
                        />
                    </li>

                    <li class="relative">
                        <TheIconBadge
                            name="bx:heart"
                            size="28"
                            :count="4"
                        />
                    </li>

                    <li>
                        <NuxtLink to="/">
                            <TheIconBadge
                                name="bx:home"
                                size="28"
                            />
                        </NuxtLink>
                    </li>


                    <li
                        class="relative"
                        @click="showCart = true"
                    >
                        <TheIconBadge
                            name="bx:cart"
                            size="28"
                            :count="3"
                        />
                    </li>

                    <li>
                        <TheIconBadge
                            name="bx:user"
                            size="28"
                        />
                    </li>
                </ul>
            </TheContainer>
        </div>

        <LazyTheLayoutSidebarCart v-model="showCart" />
        <LazyTheLayoutSidebarMenu v-model="showMenu" />
    </Teleport>
</template>
