import { defineStore } from 'pinia'
import type { Product } from '@/types/Products'
import type { Price } from '@/types/Price'

export interface WatchesSate {
  watches: Product[]
  prices: Price[]
}

export const useWatchesStore = defineStore('counter', {
  state: (): WatchesSate => ({
    watches: [],
    prices: []
  }),
  actions: {
    setWatches(watches: Product[]) {
      this.watches = watches
    },
    setPrices(prices: Price[]) {
      this.prices = prices
    }
  }
})
