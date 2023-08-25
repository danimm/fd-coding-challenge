<script setup lang="ts">
import { onMounted } from 'vue'

import ProductsContainer from '@/components/sections/Product/ProductsContainer.vue'
import HeroComponent from '@/components/hero/HeroComponent.vue'
import CarouselComponent from '@/components/sections/Carousel/CarouselComponent.vue'
import { useWatches } from '@/composables/useWatches'

defineOptions({ name: 'HomeView' })

const { fetchAllWatchesWithPrices } = useWatches()

onMounted(async () => {
  await fetchAllWatchesWithPrices()
})
</script>

<template>
  <div class="mx-[40px]">
    <HeroComponent />
    <ProductsContainer />
    <CarouselComponent />
  </div>
</template>
