// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@unocss/nuxt',
        '@invictus.codes/nuxt-vuetify',
        '@nuxt/devtools',
        '@nuxt/image-edge',
        '@nuxtjs/i18n',
        '@nuxtjs/google-fonts',
        '@vueuse/nuxt',
        'nuxt-swiper',
        [
            '@pinia/nuxt', {
                autoImports: ['defineStore', 'storeToRefs']
            }
        ]
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
            'Quicksand': [300, 400, 500, 600, 700]
        }
    },
    unocss: {
        preflight: true
    },
    css: [
        '@unocss/reset/tailwind.css'
    ],
    image: {
        dir: 'assets'
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
    },
    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],
    vuetify: {
        moduleOptions: {
            treeshaking: true,
            useIconCDN: true,
            styles: 'sass',
            autoImport: true
        }
    },
    runtimeConfig: {
        public: {
            apiBase: process.env.NUXT_PUBLIC_API_BASE,
            previewCdn: process.env.NUXT_PUBLIC_BUNNY_CDN_URL
        }
    }
})
