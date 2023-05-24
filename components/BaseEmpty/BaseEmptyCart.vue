<template>
    <div
        w:m="t-20"
        w:h="100vh"
        w:text="center"
        w:overflow="y-auto"
        w:scrollbar="~ track-radius-10px track-margin-left-10px w-4px h-3px radius-10px"
    >
        <Icon
            name="mdi:emoticon-sad-outline"
            size="350"
        />

        <p
            w:text="lg"
            w:m="t-7"
        >
            Chưa có sản phẩm trong giỏ hàng...
        </p>

        <div
            w:grid="~ cols-1"
            w:m="t-30"
        >
            <button
                type="button"
                w:case="capital"
                w:text="lg blue-600"
                w:decoration="underline"
                @click="emits('update:modelValue', false)"
            >
                {{ $t('Cart.Continue') }}
            </button>
        </div>
    </div>
</template>
