<template>
    <section
        w:p="y-10"
        w:m="t-20"
    >
        <TheContainer>
            <ul
                w:grid="~ cols-4 gap-6"
                w:flex="items-center"
            >
                <li
                    w:grid="lg:col-span-1 col-span-2"
                    w:display="flex"
                    w:flex="items-center"
                >
                    <Icon
                        name="mdi:truck-outline"
                        size="48"
                    />

                    <div w:p="l-4">
                        <h3
                            w:text="16px"
                            w:m="b-2"
                            w:font="medium"
                        >
                            {{ $t('Service.Freeship.Title') }}
                        </h3>

                        <p>{{ $t('Service.Freeship.Content') }}</p>
                    </div>
                </li>

                <li
                    w:grid="lg:col-span-1 col-span-2"
                    w:display="flex"
                    w:flex="items-center"
                >
                    <Icon
                        name="streamline:interface-arrows-turn-backward-arrow-bend-curve-change-direction-return-left-back-backward"
                        size="48"
                    />

                    <div w:p="l-4">
                        <h3
                            w:text="16px"
                            w:m="b-2"
                            w:font="medium"
                        >
                            {{ $t('Service.Returns.Title') }}
                        </h3>

                        <p>{{ $t('Service.Returns.Content') }}</p>
                    </div>
                </li>

                <li
                    w:grid="lg:col-span-1 col-span-2"
                    w:display="flex"
                    w:flex="items-center"
                >
                    <Icon
                        name="ic:baseline-support-agent"
                        size="48"
                    />

                    <div w:p="l-4">
                        <h3
                            w:text="16px"
                            w:m="b-2"
                            w:font="medium"
                        >
                            {{ $t('Service.Support.Title') }}
                        </h3>

                        <p>{{ $t('Service.Support.Content') }}</p>
                    </div>
                </li>

                <li
                    w:grid="lg:col-span-1 col-span-2"
                    w:display="flex"
                    w:flex="items-center"
                >
                    <Icon
                        name="ic:baseline-payment"
                        size="48"
                    />

                    <div w:p="l-4">
                        <h3
                            w:text="16px"
                            w:m="b-2"
                            w:font="medium"
                        >
                            {{ $t('Service.Checkout.Title') }}
                        </h3>

                        <p>{{ $t('Service.Checkout.Content') }}</p>
                    </div>
                </li>
            </ul>
        </TheContainer>
    </section>
</template>

<script setup>
</script>
