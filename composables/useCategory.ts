// ** Third Party Imports
import { useQuery } from '@tanstack/vue-query'

// ** Types Imports
import type { ICategoryList } from '~/types/category.type'
import { useOFetch } from '~/composables/useOFetch'

// ** State
const path = ref<string>(ROUTE.CATEGORY)

export const useCategory = () => {
    return {
        path
    }
}

export const useCategoryList = () => {
    // ** Hooks
    const _fetcher = useOFetch()

    const { data } = useQuery<ICategoryList[]>({
        queryKey: ['categoryList'],
        queryFn: () => _fetcher(`${path.value}/user/get-list`)
    })

    // ** Computed
    const categoryList = computed(() => data.value || [])

    return { categoryList }
}
