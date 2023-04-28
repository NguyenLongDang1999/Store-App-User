// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/devtools',
        '@nuxt/image-edge',
        '@nuxtjs/google-fonts',
        'nuxt-windicss',
        'nuxt-icon'
    ],
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in'
        }
    },
    googleFonts: {
        prefetch: true,
        preconnect: true,
        families: {
            'IBM Plex Sans': [400, 500, 600, 700]
        }
    }
})
