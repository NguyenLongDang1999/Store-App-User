<template>
    <Teleport to="body">
        <div class="fixed bottom-0 left-0 right-0 z-20 overflow-y-hidden justify-between bg-white h-16 p-[5px] shadow-[0_0_5px_rgba(61,61,61,.2)] sm:hidden inline-flex">
            <TheContainer>
                <ul class="flex justify-between items-center h-full">
                    <li>
                        <TheIconBadge
                            name="bx:list-ul"
                            size="28"
                            data-hs-overlay="#hs-overplay-menu"
                            aria-controls="hs-overplay-menu"
                            aria-label="Toggle menu"
                        />
                    </li>

                    <li class="relative">
                        <TheIconBadge
                            name="bx:heart"
                            size="28"
                            :count="4"
                        />
                    </li>

                    <li>
                        <TheIconBadge
                            name="bx:home"
                            size="28"
                        />
                    </li>


                    <li class="relative">
                        <TheIconBadge
                            name="bx:cart"
                            size="28"
                            :count="3"
                            data-hs-overlay="#hs-overplay-cart"
                            aria-controls="hs-overplay-cart"
                        />
                    </li>

                    <li>
                        <TheIconBadge
                            name="bx:user"
                            size="28"
                        />
                    </li>
                </ul>
            </TheContainer>
        </div>
    </Teleport>
</template>
