<template>
    <div
        w:m="t-20"
        w:h="100vh"
        w:text="center"
        w:overflow="y-auto"
    >
        <VIcon
            icon="mdi:mdi-emoticon-sad-outline"
            size="350"
        />

        <p
            w:text="lg"
            w:m="t-7"
        >
            Chưa có sản phẩm trong giỏ hàng...
        </p>

        <div w:m="t-30">
            <VBtn
                :text="$t('Cart.Continue')"
                variant="text"
                w:case="!capital"
                w:decoration="!underline"
                color="blue"
            />
        </div>
    </div>
</template>
