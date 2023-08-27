<script lang="ts" setup>
import ButtonComponent from '@/components/core/ButtonComponent.vue'
import { getImageUrl } from '@/composables/getImageUrl'

defineOptions({ name: 'HeroComponent' })
defineProps<{
  category: string
  title: string
  priceFormatted: string
  mainImage: string
  gallery: string[]
  selectedGalleryImageIndex: number
  shortDescription: string
  sku: string
}>()

defineEmits<{
  updateSelectedImage: [{ index: number; image: string }]
}>()
</script>

<template>
  <section class="py-[120px] lg:pt-0 3xl:py-[120px] bg-hero-bg-light">
    <div class="container grid grid-cols-12 gap-[42px]">
      <!-- Gallery -->
      <div class="col-span-12 3xl:col-span-7 4xl:col-span-6">
        <div class="md:grid md:grid-cols-6 lg:flex lg:justify-center 3xl:justify-between">
          <div class="md:col-span-6 flex lg:flex-col justify-center items-start">
            <div
              class="pr-[33px] lg:pb-[33px] cursor-pointer"
              v-for="(image, index) in gallery"
              :key="image"
              @click="$emit('updateSelectedImage', { index, image })"
            >
              <picture>
                <img
                  :src="getImageUrl(image)"
                  :alt="title"
                  class="h-[240px] w-[222px] object-contain bg-white"
                  :class="[selectedGalleryImageIndex === index ? 'opacity-100' : 'opacity-30']"
                />
              </picture>
            </div>
          </div>

          <!-- Main Image -->
          <picture class="col-span-6">
            <img
              :src="getImageUrl(mainImage)"
              :alt="title"
              class="h-[800px] md:h-[1000px] 3xl:max-w-[880px] w-full md:max-w-[850px] object-cover"
            />
          </picture>
        </div>
      </div>

      <!-- Description -->
      <div class="col-span-12 3xl:col-start-8 3xl:col-span-5">
        <div class="lg:grid lg:grid-cols-6">
          <div class="lg:col-span-6 3xl:col-span-5">
            <h3
              class="text-center lg:text-left lg:px-[40px] font-trade-bold text-normal text-primary lg:pb-4 uppercase"
            >
              {{ category }} Watches
            </h3>
            <h1
              class="font-minion text-center text-header-title-small 2xl:text-header-title lg:pb-8"
            >
              {{ title }}
            </h1>
          </div>

          <div class="lg:px-[40px] lg:col-span-6 3xl:col-start-2 3xl:col-span-5">
            <h2 class="font-minion text-[28pt] text-primary pb-[80px] text-center 2xl:text-left">
              {{ priceFormatted }}
            </h2>
            <span class="font-trade-light text-header-text-small 2xl:text-small text-text">
              Watch {{ sku }}
            </span>
            <p
              class="font-minion text-header-text-small 2xl:text-header-text text-text pb-[117px] mt-[28px] pr-[20px]"
            >
              {{ shortDescription }}
            </p>
            <div class="flex justify-center 2xl:block 2xl:text-start">
              <ButtonComponent> Add to shopping bag </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
