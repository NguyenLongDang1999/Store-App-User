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
</script>

<template>
    <VNavigationDrawer
        temporary
        width="480"
        :model-value="modelValue"
        @update:model-value="emits('update:modelValue', false)"
    >
        <div
            w:p="4"
            w:display="flex"
            w:flex="justify-between items-center"
            w:border="b-1 b-gray-200"
        >
            <h3
                w:case="capital"
                w:font="semibold"
                w:text="xl"
            >
                {{ $t('Menu.Name') }}
            </h3>

            <div
                w:p="2"
                w:cursor="pointer"
                w:border="rounded-full"
                w:hover="bg-blue-600 text-white"
                w:transition="~"
                @click="emits('update:modelValue', false)"
            >
                <VIcon
                    icon="mdi:mdi-close"
                    size="24"
                />
            </div>
        </div>

        <VDivider />

        <div w:p="4">
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
                    w:m="b-4 t-4"
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
                            <VIcon
                                icon="mdi:mdi-phone-outline"
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
                            <VIcon
                                icon="mdi:mdi-email-outline"
                                size="28"
                            />

                            <span w:case="lower">longdang0412@gmail.com</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </VNavigationDrawer>
</template>
