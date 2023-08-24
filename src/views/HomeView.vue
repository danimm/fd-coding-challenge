<script setup lang="ts">
import { onMounted } from 'vue'

import { WatchesService } from '@/services/watches.service'
import { PricesService } from '@/services/prices.service'

import ProductsContainer from '@/components/sections/Product/ProductsContainer.vue'
import HeroComponent from '@/components/hero/HeroComponent.vue'
import CarouselComponent from '@/components/sections/Carousel/CarouselComponent.vue'

defineOptions({ name: 'HomeView' })

onMounted(async () => {
  const products = await WatchesService.getProducts()
  const prices = await PricesService.getPrices()
  console.log(products)
  console.log(prices)
})
</script>

<template>
  <div class="mx-[40px]">
    <HeroComponent />
    <ProductsContainer />
    <CarouselComponent />
  </div>
</template>
