import type { IProductList } from '~/types/product.type'

export interface ICategoryList {
    id: string
    name: string
    slug: string
    image_uri: string
}

export interface ICategoryDetail {
    id: string
    name: string
    image_uri: string
    description: string
    meta_title: string
    meta_keyword: string
    meta_description: string
    Product: IProductList
}
