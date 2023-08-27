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
    // *INFO* In this coding challenge, working with static data is not relevant.
  } finally {
    // Simulate API call
    setTimeout(() => {
      isLoading.value = false
    }, 500)
  }
})
</script>

<template>
  <div
    class="p-[40px] block md:grid 3xl:container lg:gap-[42px] xl:justify-items-center bg-slider-bg watches-container min-h[80vh]"
  >
    <template v-if="isLoading">
      <WatchSliderCardSkeleton v-for="(_, idx) in 30" :key="idx" />
    </template>
    <template v-else>
      <SliderCard
        v-bind="watch"
        v-for="watch in watchesList"
        :key="watch.sku"
        class="w-full mx-auto md:mx-0 xl:w-[600px] h-[900px] mt-[100px] bg-black rounded-[5px] cursor-pointer"
      />
    </template>
  </div>
</template>

<style scoped>
.watches-container {
  grid-template-columns: repeat(auto-fit, minmax(620px, 1fr));
}
</style>
