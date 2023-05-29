<template>
    <VFooter color="grey-lighten-4">
        <VContainer>
            <VRow>
                <VCol md="4">
                    <h3
                        w:font="semibold"
                        w:case="capital"
                        w:text="lg"
                    >
                        {{ $t('About') }}
                    </h3>

                    <div
                        w:m="t-2"
                        w:text="gray-600"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum itaque magnam molestiae, nisi obcaecati officia veritatis. Aspernatur consequuntur dolorum harum illum, inventore laboriosam mollitia nulla perspiciatis possimus repellendus rerum.
                    </div>
                </VCol>

                <VCol md="4">
                    <h3
                        w:font="semibold"
                        w:case="capital"
                        w:text="lg"
                    >
                        {{ $t('Contact.Information') }}
                    </h3>

                    <ul
                        w:m="t-2"
                        w:display="flex"
                        w:flex="col"
                        w:grid="gap-3"
                    >
                        <li>
                            <strong>Địa chỉ:</strong>
                            <span
                                w:p="l-2"
                                w:text="gray-600"
                            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias asperiores autem</span>
                        </li>

                        <li>
                            <strong>Điện thoại:</strong>
                            <span
                                w:p="l-2"
                                w:text="gray-600"
                            >038.9747.179</span>
                        </li>

                        <li>
                            <strong>E-mail:</strong>
                            <span
                                w:p="l-2"
                                w:text="gray-600"
                            >longdang0412@gmail.com</span>
                        </li>
                    </ul>
                </VCol>

                <VCol md="4">
                    <h3
                        w:font="semibold"
                        w:case="capital"
                        w:text="lg"
                    >
                        {{ $t('About') }}
                    </h3>

                    <div w:m="t-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum itaque magnam molestiae, nisi obcaecati officia veritatis. Aspernatur consequuntur dolorum harum illum, inventore laboriosam mollitia nulla perspiciatis possimus repellendus rerum.
                    </div>
                </VCol>
            </VRow>
        </VContainer>
    </VFooter>
</template>
