<script setup lang="ts">
import ProductsContainer from '@/components/sections/Product/ProductsContainer.vue'
import HeroComponent from '@/components/hero/HeroComponent.vue'

defineOptions({ name: 'HomeView' })
</script>

<template>
  <HeroComponent />
  <ProductsContainer />
</template>
