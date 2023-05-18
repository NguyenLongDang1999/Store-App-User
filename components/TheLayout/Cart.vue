<template>
    <Teleport to="body">
        <aside
            id="hs-overplay-cart"
            class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 right-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-l overflow-auto"
            tabindex="-1"
        >
            <div class="flex justify-between items-center py-3 px-4 border-b">
                <h3 class="font-semibold text-gray-700 text-md uppercase">
                    {{ $t('Cart.Title') }}
                </h3>

                <button
                    type="button"
                    class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700 text-sm"
                    data-hs-overlay="#hs-overplay-cart"
                >
                    <span class="sr-only">Close modal</span>

                    <Icon
                        name="bx:x"
                        size="24"
                    />
                </button>
            </div>

            <div class="p-4">
                <ul>
                    <li
                        v-for="item in 10"
                        :key="item"
                    >
                        <BaseProductCart :product="item" />
                    </li>
                </ul>

                <ul class="mt-5">
                    <li class="flex justify-between text-[16px]">
                        <span class="capitalize">{{ $t('Cart.Total') }}</span>
                        <span class="font-semibold">300.000đ</span>
                    </li>
                </ul>

                <div class="flex gap-3 justify-between mt-5">
                    <button
                        type="button"
                        class="py-3 px-4 w-1/2 rounded-md border capitalize border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                    >
                        {{ $t('Cart.View') }}
                    </button>

                    <button
                        type="button"
                        class="py-3 px-4 py-3 px-4 w-1/2 rounded-md capitalize border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                    >
                        {{ $t('Cart.Checkout') }}
                    </button>
                </div>
            </div>
        </aside>
    </Teleport>
</template>
