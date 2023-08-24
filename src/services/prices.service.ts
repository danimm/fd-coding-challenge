import prices from '@/data/price.json'
import type { Price } from '@/types/Price'

export class PricesService {
  static async getPrices(): Promise<Price[] | null> {
    try {
      return Promise.resolve(prices as unknown as Price[])
    } catch (e) {
      // TODO: Error handler
    }

    return null
  }
}
