<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useWatches } from '@/composables/useWatches'
import type { PopulatedPricedProduct } from '@/types/Products'

import HeroComponent from '@/components/hero/HeroComponent.vue'
import CarouselComponent from '@/components/sections/Carousel/CarouselComponent.vue'
import SliderCard from '@/components/sections/Carousel/SliderCard.vue'
import ProductDescription from '@/components/sections/Watches/ProductDescription.vue'
import ProductDetailContainer from '@/components/sections/Watches/ProductDetailContainer.vue'
import ProductImage from '@/components/sections/Watches/ProductImage.vue'

defineOptions({ name: 'WatchView' })

const props = defineProps<{ id: string }>()

const { findBySku } = useWatches()

const selectedWatch = ref<PopulatedPricedProduct | null>(null)
const watchDetailImages = computed(() => {
  const gallery: string[] = []
  const details = {
    firstDetail: '',
    secondDetail: ''
  }

  selectedWatch.value?.medias.forEach(({ targetAttr, path }) => {
    if (targetAttr === 'gallery') gallery.push(path)
    if (targetAttr === 'detail-1') details.firstDetail = path
    if (targetAttr === 'detail-2') details.secondDetail = path
  })

  return {
    gallery,
    details
  }
})

onMounted(async () => {
  selectedWatch.value = await findBySku({ sku: props.id })
})
</script>

<template>
  <div class="mx-[40px]" v-if="selectedWatch">
    <HeroComponent />
    <div class="container">
      <ProductDetailContainer descriptionFirst>
        <template #left-position>
          <ProductDescription
            :title="selectedWatch.productDetails.title"
            :details="selectedWatch.productDetails.data"
            sub-title="Product Details"
          />
        </template>

        <template #right-position>
          <ProductImage :image="watchDetailImages.details.firstDetail" />
        </template>
      </ProductDetailContainer>
    </div>

    <div class="container">
      <ProductDetailContainer>
        <template #left-position>
          <ProductImage :image="watchDetailImages.details.secondDetail" />
        </template>

        <template #right-position>
          <ProductDescription
            :title="selectedWatch.productSpecifications.title"
            :details="selectedWatch.productSpecifications.data"
            sub-title="Specifications"
          />
        </template>
      </ProductDetailContainer>
    </div>

    <CarouselComponent
      v-if="selectedWatch"
      :sub-title="selectedWatch.subTitle"
      :carousel-length="selectedWatch.relatedProducts.length"
    >
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
