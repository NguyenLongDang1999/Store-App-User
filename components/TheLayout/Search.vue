<template>
    <Teleport to="body">
        <div
            id="hs-search"
            class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
        >
            <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                        <h3 class="font-bold text-gray-800 dark:text-white capitalize">
                            {{ $t('Search.Product') }}
                        </h3>

                        <button
                            type="button"
                            class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                            data-hs-overlay="#hs-search"
                        >
                            <span class="sr-only">Close</span>

                            <Icon
                                name="bx:x"
                                size="24"
                            />
                        </button>
                    </div>

                    <div class="p-4 overflow-y-auto">
                        <p class="mt-1 text-gray-800 dark:text-gray-400">
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
</script>
