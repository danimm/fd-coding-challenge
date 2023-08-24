<script setup lang="ts">
import ProductsContainer from '@/components/sections/Product/ProductsContainer.vue'
import HeroComponent from '@/components/hero/HeroComponent.vue'
import CarouselComponent from '@/components/sections/Carousel/CarouselComponent.vue'

defineOptions({ name: 'HomeView' })
</script>

<template>
  <div class="mx-[40px]">
    <HeroComponent />
    <ProductsContainer />
    <CarouselComponent />
  </div>
</template>
