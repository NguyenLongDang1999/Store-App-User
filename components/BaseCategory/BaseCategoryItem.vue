<template>
    <NuxtLink
        w:pos="relative"
        class="group"
    >
        <NuxtImg
            src="https://placehold.co/400x600/EEE/31343C"
            alt="Category"
            width="400"
            height="600"
        />

        <div
            w:display="flex"
            w:flex="justify-between items-center"
            w:pos="absolute bottom-0"
            w:w="full"
            w:p="x-5 y-4"
            w:bg="gray-100"
            w:line="clamp-1"
        >
            <h3
                w:text="lg"
                w:font="semibold"
                w:case="capital"
            >
                Category
            </h3>

            <Icon
                name="mdi:arrow-right"
                size="22"
                w:transition="~"
                class="group-hover:bg-black group-hover:text-white rounded-full"
            />
        </div>
    </NuxtLink>
</template>
