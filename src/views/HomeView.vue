<script setup lang="ts">
import SliderCard from '@/components/SliderCard.vue'
import ProductCharacteristics from '@/components/ProductCharacteristics.vue'

defineOptions({
  name: 'HomeView'
})
</script>

<template>
  <div class="container lg:container 2xl:container 4xl:container">
    <h1 class="text-2xl">Hello World</h1>
    <SliderCard />
    <ProductCharacteristics property="Metal" description="Rose gold / Silver" />
  </div>
</template>
