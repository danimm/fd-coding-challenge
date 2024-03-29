import { storeToRefs } from 'pinia'
import { useWatchesStore } from '@/stores/watches'

import { WatchesService } from '@/services/watches.service'
import { PricesService } from '@/services/prices.service'

import type { PopulatedPricedProduct, PopulatedProduct, Product } from '@/types/Products'
import type { Price } from '@/types/Price'

export function useWatches() {
  const watchesStore = useWatchesStore()

  async function fetchAllWatchesWithPrices() {
    const response = await Promise.allSettled([
      WatchesService.getProducts(),
      PricesService.getPrices()
    ])

    if (response.some(({ status }) => status === 'rejected')) {
      watchesStore.$reset()
      return
    }

    const [watches, prices] = response
    watchesStore.setWatches((watches as PromiseFulfilledResult<Product[]>).value)
    watchesStore.setPrices((prices as PromiseFulfilledResult<Price[]>).value)
  }

  function getPopulatedRelateWatches(relatedSku: string[]): PopulatedProduct[] {
    const populatedPrices: Record<string, string> = {}
    watchesStore.prices
      .filter(({ sku }) => relatedSku.includes(sku))
      .forEach(({ sku, priceFormatted }) => {
        populatedPrices[sku] = priceFormatted
      })

    return watchesStore.watches
      .filter(({ sku }) => relatedSku.includes(sku))
      .map(({ category, subTitle, sku, medias }) => ({
        category,
        subTitle,
        sku,
        mainImage: medias[1].path,
        priceFormatted: populatedPrices[sku]
      }))
  }

  async function findBySku(sku: string): Promise<PopulatedPricedProduct> {
    if (watchesStore.watches.length === 0 || watchesStore.prices) await fetchAllWatchesWithPrices()

    const selectedWatch = watchesStore.watches.find((watch: Product) => watch.sku === sku)
    const selectedPrice = watchesStore.prices.find((price: Price) => price.sku === sku)

    if (!selectedWatch || !selectedPrice) return Promise.reject('Watches not found')

    return {
      ...selectedWatch,
      price: selectedPrice,
      relatedProducts: getPopulatedRelateWatches(selectedWatch.relatedProducts)
    }
  }

  function reset() {
    watchesStore.$reset()
  }

  return {
    ...storeToRefs(watchesStore),
    fetchAllWatchesWithPrices,
    getPopulatedRelateWatches,
    findBySku,
    reset
  }
}
