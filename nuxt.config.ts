// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/devtools',
        '@nuxt/image-edge',
        '@nuxtjs/i18n',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@vueuse/nuxt',
        'nuxt-icon',
        [
            '@pinia/nuxt', {
                autoImports: ['defineStore', 'storeToRefs']
            }
        ]
    ],
    app: {
        head: {
            // script: [
            //     {
            //         src: '/vendor/preline/dist/preline.js',
            //         defer: true
            //     }
            // ]
        },
        pageTransition: {
            name: 'page',
            mode: 'out-in'
        }
    },
    googleFonts: {
        prefetch: true,
        preconnect: true,
        families: {
            'Public Sans': [300, 400, 500, 600, 700]
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
        defaultLocale: 'vi',
        customRoutes: 'config',
        pages: {
            'categories/index': {
                en: '/categories',
                vi: '/danh-muc'
            },
            'shop': {
                en: '/shop',
                vi: '/cua-hang'
            },
            'about': {
                en: '/about',
                vi: '/gioi-thieu'
            },
            'contact': {
                en: '/contact',
                vi: '/lien-he'
            }
        }
    },
    imports: {
        dirs: ['stores']
    }
})
