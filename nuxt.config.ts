// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/devtools',
        '@nuxt/image-edge',
        '@nuxtjs/i18n',
        '@nuxtjs/google-fonts',
        '@vueuse/nuxt',
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
    },
    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en-US.ts'
            },
            {
                code: 'vi',
                file: 'vi-VN.ts'
            }
        ],
        lazy: true,
        langDir: 'locales',
        defaultLocale: 'vi'
    }
})
