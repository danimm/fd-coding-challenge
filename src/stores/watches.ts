import { defineStore } from 'pinia'
import type { PricedProduct, Product } from '@/types/Products'
import type { Price } from '@/types/Price'

type WatchesStoreStatus = 'hasErrors' | 'ok'

export interface WatchesSate {
  watches: Product[]
  prices: Price[]
  selectedWatch: PricedProduct | null
  status: WatchesStoreStatus
}

export const useWatchesStore = defineStore('counter', {
  state: (): WatchesSate => ({
    watches: [],
    prices: [],
    selectedWatch: null,
    status: 'ok'
  }),
  actions: {
    setWatches(watches: Product[]) {
      this.watches = watches
    },
    setPrices(prices: Price[]) {
      this.prices = prices
    },
    setStoreStatus(newStatus: WatchesStoreStatus) {
      this.status = newStatus
    }
  }
})
