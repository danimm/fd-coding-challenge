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
  <div class="3xl:h-[1970px] pt-[120px] md:py-[120px] 3xl:pb-[140px] bg-hero-bg-light">
    <div class="container grid grid-cols-12 gap-[42px]">
      <!-- Gallery -->
      <div class="md:col-span-12 3xl:col-span-7 4xl:col-span-6">
        <div class="md:grid md:grid-cols-6 lg:flex lg:justify-center 3xl:justify-between">
          <div class="md:col-span-6 flex lg:flex-col justify-center items-start">
            <div
              class="md:pr-[33px] lg:pb-[33px] cursor-pointer"
              v-for="(image, index) in gallery"
              :key="image"
              @click="$emit('updateSelectedImage', { index, image })"
            >
              <picture>
                <img
                  :src="getImageUrl(image)"
                  :alt="title"
                  class="md:h-[240px] w-[222px] object-contain bg-white"
                  :class="[selectedGalleryImageIndex === index ? 'opacity-100' : 'opacity-30']"
                />
              </picture>
            </div>
          </div>

          <!-- Main Image -->
          <picture class="md:col-span-6">
            <img
              :src="getImageUrl(mainImage)"
              :alt="title"
              class="h-full md:h-[1000px] md:max-h-[1000px] 3xl:h-[1776px] 3xl:max-h-none 3xl:max-w-[880px] w-full object-cover"
            />
          </picture>
        </div>
      </div>

      <!-- Description -->
      <div class="md:col-span-12 3xl:col-start-8 3xl:col-span-5 3xl:py-[212px]">
        <div class="lg:grid lg:grid-cols-6">
          <div class="lg:col-span-6 3xl:col-span-5">
            <h3
              class="text-center lg:text-left font-trade-bold text-normal text-primary lg:pb-4 3xl:pb-[78px] uppercase"
            >
              {{ category }} Watches
            </h3>
            <h1
              class="font-minion text-center lg:text-left text-header-title lg:pb-8 3xl:pb-[132px]"
            >
              {{ title }}
            </h1>
          </div>

          <div class="lg:px-[40px] lg:col-span-6 3xl:col-start-2 3xl:col-span-5">
            <h2 class="font-minion text-[28pt] text-primary pb-[80px] text-center lg:text-left">
              {{ priceFormatted }}
            </h2>
            <span class="font-trade-light text-small text-secondary pb-[38px]">
              Watch {{ sku }}
            </span>
            <p class="font-minion text-header-text text-text pb-[117px] pr-[20px]">
              {{ shortDescription }}
            </p>
            <div class="text-center lg:text-start">
              <ButtonComponent> Add to shopping bag </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
