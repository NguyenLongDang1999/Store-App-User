<template>
    <header class="border-b border-solid border-b-[#eee]">
        <TheHeaderTop />
        <TheHeaderNavbar />
    </header>

    <main class="mt-10">
        <slot />
    </main>

    <TheToolbarMenu />
</template>
