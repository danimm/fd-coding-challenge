<script setup lang="ts">
import SliderCard from '@/components/SliderCard.vue'
import ProductCharacteristics from '@/components/sections/Product/ProductCharacteristics.vue'
import ProductsContainer from '@/components/sections/Product/ProductsContainer.vue'

defineOptions({
  name: 'HomeView'
})
</script>

<template>
  <ProductsContainer />
  <!--  <SliderCard />-->
  <!--  <ProductCharacteristics property="Metal" description="Rose gold / Silver" />-->
</template>
