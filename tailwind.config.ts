import type { Config } from 'tailwindcss'
import { blue } from 'tailwindcss/colors'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        extend: {
            screens: {
                xs: '450px',
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
                sans: ['"Public Sans"', ...fontFamily.sans]
            }
        }
    }
}
