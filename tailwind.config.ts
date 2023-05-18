import type { Config } from 'tailwindcss'
import { blue } from 'tailwindcss/colors'

export default <Partial<Config>>{
    content: [
        'node_modules/preline/dist/*.js'
    ],
    theme: {
        extend: {
            screens: {
                sm: '576px',
                md: '768px',
                lg: '992px',
                xl: '1200px',
                '2xl': '1450px'
            },
            colors: {
                primary: blue
            },
            fontFamily: {
                sans: ['"Public Sans"']
            }
        }
    },
    plugins: [
        require('preline/plugin')
    ]
}
