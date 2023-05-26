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
        >
            <h3
                w:w="75"
                w:text="lg"
                w:font="semibold"
                w:case="capital"
                w:line="clamp-1"
            >
                Category Lorem lit.one sunt voluptatibus! Soluta, veniam.
            </h3>

            <div
                class="group-hover:bg-black group-hover:text-white rounded-full p-2"
                w:transition="~"
            >
                <Icon
                    name="mdi:arrow-right"
                    size="24"
                />
            </div>
        </div>
    </NuxtLink>
</template>
