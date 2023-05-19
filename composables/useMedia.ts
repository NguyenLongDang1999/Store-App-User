export const useMedia = () => {
    const { isGreaterOrEquals, isLessThan } = useViewport()

    const isLarge = isGreaterOrEquals('lg')
    const isTablet = isGreaterOrEquals('sm')
    const isMobile = isLessThan('sm')
    const isDesktop = isGreaterOrEquals('md')

    return {
        isLarge,
        isTablet,
        isMobile,
        isDesktop
    }
}
