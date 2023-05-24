<script setup lang="ts">

// ** Utils Imports
import navItems from '~~/utils/navigations'

// ** Props & Emits
interface Props {
    modelValue: boolean
}

interface Emits {
    (event: 'update:modelValue', payload: boolean): boolean
}

defineProps<Props>()

const emits = defineEmits<Emits>()

// ** useHooks
const route = useRoute()

// ** Watch
watch(route, () => emits('update:modelValue', false), { deep: true, immediate: true })
</script>

<template>
    <Teleport to="body">
        <TheOverplay
            :show-overplay="modelValue"
            @click="emits('update:modelValue', false)"
        />

        <Transition name="menu">
            <TheSidebar
                v-if="modelValue"
                position="left"
                :close="() => emits('update:modelValue', false)"
                :title="$t('Menu.Name')"
            >
                <ul
                    w:display="flex"
                    w:flex="col"
                    w:grid="gap-6"
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

                    <li
                        w:border="t-1 gray-200"
                        w:text="lg"
                        w:m="b-4 t-10"
                        w:case="upper"
                        w:font="medium"
                    >
                        <h6 w:p="t-5">
                            {{ $t('Support') }}
                        </h6>

                        <div w:m="t-4">
                            <div
                                w:display="flex"
                                w:flex="items-center"
                                w:grid="gap-3"
                            >
                                <Icon
                                    name="mdi:phone-outline"
                                    size="28"
                                />

                                <span>038 9747 179</span>
                            </div>

                            <div
                                w:m="t-4"
                                w:display="flex"
                                w:flex="items-center"
                                w:grid="gap-3"
                            >
                                <Icon
                                    name="mdi:envelope-outline"
                                    size="28"
                                />

                                <span w:case="lower">longdang0412@gmail.com</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </TheSidebar>
        </Transition>
    </Teleport>
</template>

<style lang="scss" scoped>
.menu-enter-active,
.menu-leave-active {
    transition: transform 0.5s ease;
}

.menu-enter-from,
.menu-leave-to {
    transform: translateX(-104%);
}
</style>
