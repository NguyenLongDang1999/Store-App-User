export const getImageFile = (path: string, name?: string) => {
    if (name) {
        return name.includes('https://') ?
            name :
            `${useRuntimeConfig().public.previewCdn}/${path}/${name}`
    }

    return IMAGE.DEFAULT
}
