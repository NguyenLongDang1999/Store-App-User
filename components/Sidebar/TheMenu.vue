<script setup lang="ts">

// ** Utils Imports
import navItems from '~~/utils/navigations'

// ** Props & Emits
interface Props {
    isOpen: boolean
}

interface Emits {
    (event: 'close', payload: boolean): boolean
}

defineProps<Props>()

const emits = defineEmits<Emits>()
</script>

<template>
    <Teleport to="body">
        <TransitionGroup>
            <LazyCoreTheOverplay
                v-if="isOpen"
                display="lg:hidden"
                @click="emits('close', false)"
            />

            <aside
                v-if="isOpen"
                pos="fixed top-0 bottom-0 right-0"
                w="250px"
                bg="white"
                z="100"
                p="y-5 x-7"
                opacity="100"
                transition="all duration-300"
                display="lg:hidden visible"
            >
                <div
                    display="flex"
                    justify="between"
                    align="items-center"
                    m="b-8"
                >
                    <NuxtLink to="/">
                        <NuxtImg
                            src="https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png"
                            alt="Logo"
                            h="max-35px"
                        />
                    </NuxtLink>

                    <button
                        type="button"
                        display="flex"
                        justify="center"
                        align="items-center"
                        w="35px"
                        h="35px"
                        border="rounded-1/2"
                        bg="light-600"
                        text="dark-500"
                        hover="bg-blue-600 text-white"
                        transition="~"
                        @click="emits('close', false)"
                    >
                        <Icon
                            name="ph:x"
                            size="12"
                        />
                    </button>
                </div>

                <ul
                    display="block"
                    h="full"
                    overflow="y-auto"
                    m="0"
                >
                    <li
                        v-for="nav in navItems"
                        :key="nav.to"
                        m="y-10px x-0"
                    >
                        <NuxtLink
                            :to="localePath({ name: nav.name })"
                            class="text-15px text-[#777] capitalize font-medium transition-all hover:text-blue-600"
                        >
                            {{ $t(`Navigation.${nav.title}`) }}
                        </NuxtLink>
                    </li>
                </ul>
            </aside>
        </TransitionGroup>
    </Teleport>
</template>

<style lang="scss" scoped>
.v-enter-from,
.v-leave-to {
    opacity: 0;
    visibility: hidden;
    right: -250px;
}
</style>
