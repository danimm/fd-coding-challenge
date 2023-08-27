<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useWatches } from '@/composables/useWatches'
import type { PopulatedPricedProduct } from '@/types/Products'

import HeroComponent from '@/components/hero/HeroComponent.vue'
import CarouselComponent from '@/components/sections/Carousel/CarouselComponent.vue'
import ProductDescription from '@/components/sections/Watches/ProductDescription.vue'
import ProductDetailContainer from '@/components/sections/Watches/ProductDetailContainer.vue'
import ProductImage from '@/components/sections/Watches/ProductImage.vue'

defineOptions({ name: 'WatchView' })

const route = useRoute()
const router = useRouter()
const { findBySku } = useWatches()

const selectedWatch = ref<PopulatedPricedProduct | null>(null)
const heroImage = ref({ index: 0, image: '' })

const watchDetailImages = computed(() => {
  const gallery: string[] = []
  const details = {
    mainImage: '',
    firstDetail: '',
    secondDetail: ''
  }

  selectedWatch.value?.medias.forEach(({ targetAttr, path }) => {
    if (targetAttr === 'gallery') gallery.push(path)
    else if (targetAttr === 'detail-1') details.firstDetail = path
    else if (targetAttr === 'detail-2') details.secondDetail = path
  })

  return { gallery, details }
})

// Abstractions like this one are recommended to improve the readability of the template part
const heroComponentProps = computed(() => ({
  title: selectedWatch.value?.title || '',
  category: selectedWatch.value?.category || '',
  priceFormatted: selectedWatch.value?.price.priceFormatted || '',
  shortDescription: selectedWatch.value?.shortDescription || '',
  sku: selectedWatch.value?.sku || '',
  gallery: watchDetailImages.value.gallery,
  selectedGalleryImageIndex: heroImage.value.index,
  mainImage: heroImage.value.image
}))

function updateMainImage(payload: { index: number; image: string }) {
  heroImage.value = { ...payload }
}

function goToTop() {
  window.scrollTo(0, 0)
}

watch(
  () => route.params.id,
  async () => {
    try {
      selectedWatch.value = await findBySku(String(route.params.id))
      const newHeroImage = selectedWatch.value?.medias.find(
        ({ targetAttr }) => targetAttr === 'mainImage'
      )

      if (newHeroImage) heroImage.value.image = newHeroImage.path
    } catch (e) {
      await router.push({ name: 'Watches' })
    }
  },
  { immediate: true }
)

onMounted(() => {
  goToTop()
})
</script>

<template>
  <div class="2xl:container" v-if="selectedWatch" :key="selectedWatch.id">
    <HeroComponent v-bind="heroComponentProps" @update-selected-image="updateMainImage" />

    <ProductDetailContainer descriptionFirst first-element>
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

    <CarouselComponent
      :sub-title="selectedWatch.subTitle"
      :related-products="selectedWatch.relatedProducts"
      @go-to-details="goToTop"
    />
  </div>
</template>
