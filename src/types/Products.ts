import type { Price } from '@/types/Price'

export interface Media {
  targetAttr: string
  path: string
  sortOrder: number
}

export interface ProductDetail {
  title: string
  text: string
  iconTarget: string
  sortOrder: number
}

export interface ProductDetails {
  title: string
  data: ProductDetail[]
}

export interface ProductSpecifications {
  title: string
  data: ProductDetail[]
}

export interface Product {
  id: string
  category: string
  title: string
  subTitle: string
  sku: string
  shortDescription: string
  isActive: boolean
  medias: Media[]
  productDetails: ProductDetails
  productSpecifications: ProductSpecifications
  relatedProducts: string[]
}

export interface PricedProduct extends Product {
  price: Price
}
