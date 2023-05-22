<script setup lang="ts">

// ** MazUI Imports
import MazDrawer from 'maz-ui/components/MazDrawer'

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
const localePath = useLocalePath()
const route = useRoute()

// ** Watch
watch(route, () => emits('update:modelValue', false), { deep: true, immediate: true })
</script>

<template>
    <MazDrawer
        variant="left"
        :model-value="modelValue"
        size="320px"
        @update:model-value="emits('update:modelValue', false)"
    >
        <template #title>
            <NuxtLink
                to="/"
                class="flex-none text-xl font-semibold"
            >
                MENU
            </NuxtLink>
        </template>

        <template #default>
            <nav class="p-6 w-full flex flex-col flex-wrap">
                <ul class="space-y-1.5">
                    <li
                        v-for="nav in navItems"
                        :key="nav.to"
                    >
                        <NuxtLink
                            class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md capitalize"
                            :to="localePath({ name: nav.name })"
                            active-class="bg-gray-100"
                        >
                            {{ $t(`Navigation.${nav.title}`) }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </template>
    </MazDrawer>
</template>
