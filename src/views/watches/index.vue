<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useWatches } from '@/composables/useWatches'
import SliderCard from '@/components/sections/Carousel/SliderCard.vue'
import WatchSliderCardSkeleton from '@/components/WatchSliderCardSkeleton.vue'
import type { PopulatedProduct } from '@/types/Products'

defineOptions({ name: 'WatchesView' })

const { fetchAllWatchesWithPrices, watches, getPopulatedRelateWatches } = useWatches()

const watchesList = ref<PopulatedProduct[]>([])

const isLoading = ref(true)

onMounted(async () => {
  try {
    await fetchAllWatchesWithPrices()
    const onlyRelated = Array.from(
      new Set(watches.value.flatMap(({ relatedProducts }) => relatedProducts))
    )
    watchesList.value = getPopulatedRelateWatches(onlyRelated)
  } catch (e) {
    // Error handling
  } finally {
    // Simulate API call
    setTimeout(() => {
      isLoading.value = false
    }, 500)
  }
})
</script>

<template>
  <div class="p-[40px] container bg-slider-bg watches-container min-h[80vh]">
    <template v-if="isLoading">
      <WatchSliderCardSkeleton v-for="(_, idx) in 30" :key="idx" />
    </template>
    <template v-else>
      <SliderCard v-bind="watch" v-for="watch in watchesList" :key="watch.sku" />
    </template>
  </div>
</template>

<style scoped>
.watches-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(620px, 1fr));
  justify-items: center;
  gap: 42px;
}
</style>
