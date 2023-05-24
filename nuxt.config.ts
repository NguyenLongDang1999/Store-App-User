// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/devtools',
        '@nuxt/image-edge',
        '@nuxtjs/i18n',
        '@nuxtjs/google-fonts',
        '@vueuse/nuxt',
        'nuxt-icon',
        'nuxt-viewport',
        '@unocss/nuxt',
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
    viewport: {
        breakpoints: {
            xs: 450,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
            '2xl': 1400
        },
        cookieName: 'viewport',
        defaultBreakpoints: {
            desktop: 'lg',
            mobile: 'sm',
            tablet: 'md'
        },
        fallbackBreakpoint: 'lg'
    }
})
