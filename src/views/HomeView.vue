<script setup lang="ts">
import SliderCard from '@/components/SliderCard.vue'
import ProductCharacteristics from '@/components/ProductCharacteristics.vue'

defineOptions({
  name: 'HomeView'
})
</script>

<template>
  <SliderCard />
  <ProductCharacteristics property="Metal" description="Rose gold / Silver" />
</template>
