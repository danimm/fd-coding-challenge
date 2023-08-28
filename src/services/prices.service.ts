import prices from '@/data/price.json'
import type { Price } from '@/types/Price'

export class PricesService {
  static async getPrices(): Promise<Price[] | null> {
    try {
      const filteredPrices = (prices as Price[]).filter(({ isActive }) => isActive)
      return Promise.resolve(filteredPrices)
    } catch (e) {
      // Error handler
    }

    return null
  }
}
