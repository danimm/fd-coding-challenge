import { storeToRefs } from 'pinia'
import { useWatchesStore } from '@/stores/watches'

import { WatchesService } from '@/services/watches.service'
import { PricesService } from '@/services/prices.service'

import type { PricedProduct, Product } from '@/types/Products'
import type { Price } from '@/types/Price'

export function useWatches() {
  const watchesStore = useWatchesStore()

  async function fetchAllWatchesWithPrices() {
    const response = await Promise.allSettled([WatchesService.getProducts, PricesService.getPrices])
    if (response.some(({ status }) => status === 'rejected')) {
      watchesStore.$reset()
    }
  }

  function setSelectedWatch(watch: PricedProduct) {
    watchesStore.setSelectedWatch(watch)
  }

  async function findBySku(sku: string): Promise<void> {
    if (watchesStore.watches.length === 0 || watchesStore.prices) await fetchAllWatchesWithPrices()

    const selectedWatch = watchesStore.watches.find((watch: Product) => watch.sku === sku)
    const selectedPrice = watchesStore.prices.find((price: Price) => price.sku === sku)

    if (!selectedWatch || !selectedPrice) return Promise.reject('Product not found')

    setSelectedWatch({ ...selectedWatch, price: selectedPrice })
  }

  function reset() {
    watchesStore.$reset()
  }

  return {
    ...storeToRefs(watchesStore),
    fetchAllWatchesWithPrices,
    findBySku,
    reset
  }
}
