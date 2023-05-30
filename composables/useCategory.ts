// ** Third Party Imports
import { useQuery } from '@tanstack/vue-query'

// ** Types Imports
import type { ICategoryList, ICategoryDetail } from '~/types/category.type'
import { useOFetch } from '~/composables/useOFetch'

// ** State
const path = ref<string>(ROUTE.CATEGORY)

export const useCategory = () => {
    return {
        path
    }
}

export const useCategoryList = async () => {
    // ** Hooks
    const _fetcher = useOFetch()

    const { data, suspense } = useQuery<ICategoryList[]>({
        queryKey: ['categoryList'],
        queryFn: () => _fetcher(`${path.value}/user/get-list`)
    })

    // ** Computed
    const categoryList = computed(() => data.value || [])

    await suspense()

    return { categoryList }
}

export const useCategoryDetail = async (slug: string) => {
    // ** Hooks
    const _fetcher = useOFetch()

    const { data, suspense } = useQuery<ICategoryDetail>({
        queryKey: ['categoryDetail', slug],
        queryFn: () => _fetcher(`${path.value}/user/${slug}`)
    })

    // ** Computed
    const categoryDetail = computed(() => data.value as ICategoryDetail)

    await suspense()

    return { categoryDetail }
}
