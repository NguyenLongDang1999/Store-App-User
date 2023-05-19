<template>
    <section class="mt-24">
        <TheContainer>
            <div class="grid grid-cols-12 md:gap-8 gap-4">
                <div class="col-span-12">
                    <TheTitle title="News" />
                </div>

                <div
                    v-for="item in 8"
                    :key="item"
                    class="lg:col-span-3 md:col-span-4 xs:col-span-6 col-span-12"
                >
                    <BaseProductCard :product="item" />
                </div>
            </div>
        </TheContainer>
    </section>
</template>
