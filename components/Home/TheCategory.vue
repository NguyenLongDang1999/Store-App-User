<template>
    <div m="t-20">
        <div
            m="x-auto"
            p="x-4"
            container="~"
        >
            <h2
                text="3xl capitalize center"
                font="semibold"
            >
                {{ $t('Category.Popular') }}
            </h2>

            <div
                display="grid"
                grid="cols-12 gap-5"
                m="t-9"
            >
                <div
                    v-for="item in 6"
                    :key="item"
                    grid="col-span-2"
                >
                    <LazyCoreProductCategory />
                </div>
            </div>
        </div>
    </div>
</template>
