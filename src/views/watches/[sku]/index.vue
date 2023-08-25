<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useWatches } from '@/composables/useWatches'
import type { PopulatedPricedProduct } from '@/types/Products'

import ProductsContainer from '@/components/sections/Product/ProductsContainer.vue'
import HeroComponent from '@/components/hero/HeroComponent.vue'
import CarouselComponent from '@/components/sections/Carousel/CarouselComponent.vue'
import SliderCard from '@/components/sections/Carousel/SliderCard.vue'

defineOptions({ name: 'WatchView' })

const props = defineProps<{ id: string }>()

const { findBySku } = useWatches()

const selectedWatch = ref<PopulatedPricedProduct | null>(null)

onMounted(async () => {
  selectedWatch.value = await findBySku({ sku: props.id })
  console.log(selectedWatch.value)
})
</script>

<template>
  <div class="mx-[40px]">
    <HeroComponent />
    <ProductsContainer />
    <CarouselComponent v-if="selectedWatch" :sub-title="selectedWatch.subTitle">
      <template #slider-card>
        <SliderCard
          class="mr-[40px]"
          v-for="watch in selectedWatch.relatedProducts"
          :key="watch.sku"
          v-bind="watch"
        />
      </template>
    </CarouselComponent>
  </div>
</template>
