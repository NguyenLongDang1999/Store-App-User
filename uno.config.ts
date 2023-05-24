import { defineConfig, presetAttributify, presetWebFonts, presetUno } from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'

export default defineConfig({
    presets: [
        presetUno(),
        presetScrollbar(),
        presetAttributify({
            prefix: 'w:',
            prefixedOnly: true
        }),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: [
                    {
                        name: 'Quicksand',
                        weights: ['300', '400', '500', '600', '700']
                    }
                ]
            }
        })
    ],
    theme: {
        breakpoints: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1400px'
        }
    }
})

