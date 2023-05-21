<template>
    <header class="border-b border-solid border-b-[#eee]">
        <TheLayoutHeaderTop />
        <TheLayoutHeaderNavbar />
    </header>

    <main class="mt-10">
        <slot />
    </main>

    <TheLayoutToolbarMenu />
</template>
