<script lang="ts" setup>
import { computed, ref } from 'vue'
import { vIntersectionObserver } from '@vueuse/components'
import type { PopulatedProduct } from '@/types/Products'

import SliderCard from '@/components/sections/Carousel/SliderCard.vue'

defineOptions({ name: 'CarouselComponent' })
defineProps<{ subTitle: string; relatedProducts: PopulatedProduct[] }>()

function goToTop() {
  window.scrollTo(0, 0)
}

const container = ref<HTMLElement | null>(null)
const cards = computed(() => {
  if (!container.value) return [] as Element[]
  return Array.from(container.value.children)
})
const lastIndexVisible = ref(2)

function onIntersectionObserver([{ isIntersecting, target }]: [IntersectionObserverEntry]) {
  if (isIntersecting) {
    lastIndexVisible.value = cards.value.findIndex((element) => element.isSameNode(target)) || 0
  }
}
</script>

<template>
  <div class="bg-slider-bg">
    <div class="container h-[1500px] grid grid-cols-12 pb-[250px] gap-[42px]">
      <div class="col-span-3 flex flex-col justify-end items-start">
        <div class="">
          <h3 class="font-trade-bold text-primary text-normal uppercase mb-[42px]">
            {{ subTitle }} collection
          </h3>
          <h2 class="font-minion text-title text-white mb-[100px]">Related Pieces</h2>
        </div>

        <div
          class="border-2 w-[220px] h-[220px] border-[#1e1e1e] rounded-[50%] flex flex-col justify-center items-center mb-[100px]"
        >
          <picture>
            <img src="@/assets/images/icons/arrow.png" alt="Arrow left" class="pb-[35px]" />
          </picture>

          <h3 class="uppercase text-[14pt] tracking-widest text-white font-trade-bold">Drag</h3>
        </div>

        <div class="font-minion text-[20pt] text-secondary pl-[82px]">
          <span class="text-white">{{ lastIndexVisible + 1 }}</span>
          <span>/ {{ relatedProducts.length }}</span>
        </div>
      </div>

      <div class="col-span-9 gap-0 flex items-end">
        <div ref="container" class="flex w-full overflow-x-scroll snap-x snap-mandatory">
          <SliderCard
            v-intersection-observer="[
              onIntersectionObserver as unknown as IntersectionObserverCallback,
              { root: container, threshold: 1 }
            ]"
            v-for="watch in relatedProducts"
            :key="watch.sku"
            v-bind="watch"
            @click="goToTop"
            class="mr-[40px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
