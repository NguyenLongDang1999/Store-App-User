<template>
    <section
        w:p="y-10"
        w:m="t-20"
    >
        <VContainer>
            <VRow>
                <VCol
                    lg="3"
                    sm="6"
                    cols="12"
                >
                    <div
                        w:display="flex"
                        w:flex="items-center"
                    >
                        <VIcon
                            icon="mdi:mdi-truck-outline"
                            size="48"
                        />

                        <div w:p="l-4">
                            <h3
                                w:text="16px"
                                w:m="b-1"
                                w:font="medium"
                            >
                                {{ $t('Service.Freeship.Title') }}
                            </h3>

                            <p>{{ $t('Service.Freeship.Content') }}</p>
                        </div>
                    </div>
                </VCol>

                <VCol
                    lg="3"
                    sm="6"
                    cols="12"
                >
                    <div
                        w:display="flex"
                        w:flex="items-center"
                    >
                        <VIcon
                            icon="mdi:mdi-cash-refund"
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
                    </div>
                </VCol>

                <VCol
                    lg="3"
                    sm="6"
                    cols="12"
                >
                    <li
                        w:grid="lg:col-span-1 col-span-2"
                        w:display="flex"
                        w:flex="items-center"
                    >
                        <VIcon
                            icon="mdi:mdi-face-agent"
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
                </VCol>

                <VCol
                    lg="3"
                    sm="6"
                    cols="12"
                >
                    <li
                        w:grid="lg:col-span-1 col-span-2"
                        w:display="flex"
                        w:flex="items-center"
                    >
                        <VIcon
                            icon="mdi:mdi-credit-card-outline"
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
                </VCol>
            </VRow>
        </VContainer>
    </section>
</template>
