import { defineConfig, presetAttributify, presetWebFonts, presetUno } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
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
    ]
})

