<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useWatches } from '@/composables/useWatches'
import SliderCard from '@/components/sections/Carousel/SliderCard.vue'
import WatchSliderCardSkeleton from '@/components/WatchSliderCardSkeleton.vue'

defineOptions({ name: 'WatchesView' })

const { fetchAllWatchesWithPrices, watches } = useWatches()

const isLoading = ref(true)

onMounted(async () => {
  try {
    await fetchAllWatchesWithPrices()
  } catch (e) {
    // Error handling...
  } finally {
    setTimeout(() => {
      isLoading.value = false
    }, 1000)
  }
})
</script>

<template>
  <div class="p-[40px] mx-[40px] bg-slider-bg watches-container">
    <template v-if="isLoading">
      <WatchSliderCardSkeleton v-for="(_, idx) in 30" :key="idx" />
    </template>
    <template v-else>
      <SliderCard v-for="{ sku } in watches" :key="sku" />
    </template>
  </div>
</template>

<style scoped>
.watches-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(620px, 1fr));
  justify-items: center;
  gap: 42px;
  min-height: 80vh;
}
</style>
