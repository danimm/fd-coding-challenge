import { useCounterStore } from '@/stores/counter'

export function useCounter() {
  const counterStore = useCounterStore()

  return {
    counterStore
  }
}
