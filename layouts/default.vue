<template>
    <header>
        <TheLayoutHeaderTop />
        <TheLayoutHeaderNavbar />
    </header>

    <main>
        <slot />
    </main>

    <!--    <LazyTheLayoutCart /> -->
    <LazyTheLayoutMenu />
    <LazyTheLayoutSearch />
    <LazyTheLayoutCategory />
    <LazyBaseDialogQuickView />
    <TheLayoutToolbarMenu />
</template>
