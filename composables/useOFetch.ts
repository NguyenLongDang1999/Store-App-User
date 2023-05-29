// ** Third Party Imports
import { ofetch } from 'ofetch'

export const useOFetch = () => {
    return ofetch.create({
        baseURL: useRuntimeConfig().public.apiBase,
        credentials: 'include',
        headers: {
            Accept: 'application/json'
        },
        retry: 1,
        keepalive: true
    })
}
