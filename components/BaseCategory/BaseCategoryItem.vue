<script setup lang="ts">

// ** Types Imports
import type { ICategoryList } from '~/types/category.type'
import { getImageFile } from '~/utils'

// ** Props & Emits
interface Props {
    category: ICategoryList
}

defineProps<Props>()

// ** useHooks
const { path } = useCategory()
</script>

<template>
    <NuxtLink
        w:pos="relative"
        class="group"
        :to="category.slug"
    >
        <NuxtImg
            :src="getImageFile(path, category.image_uri)"
            :alt="category.name"
            width="400"
            height="600"
            w:border="rounded-lg"
        />

        <div
            w:display="flex"
            w:flex="justify-between items-center"
            w:pos="absolute bottom-0"
            w:w="full"
            w:p="x-5 y-4"
            w:bg="gray-100"
        >
            <h3
                w:w="75"
                w:text="lg"
                w:font="semibold"
                w:case="capital"
                w:line="clamp-1"
            >
                {{ category.name }}
            </h3>

            <div
                class="group-hover:bg-black group-hover:text-white rounded-full p-2"
                w:transition="~"
            >
                <VIcon
                    icon="mdi:mdi-arrow-right"
                    size="22"
                />
            </div>
        </div>
    </NuxtLink>
</template>
