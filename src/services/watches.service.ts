import products from '@/data/products.json'
import type { Product } from '@/types/Products'

export class WatchesService {
  static async getProducts(): Promise<Product[] | null> {
    try {
      return Promise.resolve(products as unknown as Product[])
    } catch (e) {
      // TODO: Error handler
    }

    return null
  }
}
