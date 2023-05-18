<template>
    <Teleport to="body">
        <div
            id="hs-overplay-menu"
            class="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 left-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-r pt-7 pb-10 overflow-y-auto scrollbar-y"
        >
            <div class="px-6">
                <NuxtLink
                    to="/"
                    class="flex-none text-xl font-semibold"
                    aria-label="Brand"
                >
                    MENU
                </NuxtLink>
            </div>

            <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap">
                <ul class="space-y-1.5">
                    <li>
                        <NuxtLink
                            class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100"
                            href="javascript:;"
                        >
                            <Icon
                                name="bx:home"
                                class="w-3.5 h-3.5"
                                size="16"
                            />

                            Dashboard
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </Teleport>
</template>
