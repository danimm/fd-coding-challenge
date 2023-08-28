<script lang="ts" setup>
import { computed, ref } from 'vue'
import { vIntersectionObserver } from '@vueuse/components'
import type { PopulatedProduct } from '@/types/Products'

import SliderCard from '@/components/sections/Carousel/SliderCard.vue'

defineOptions({ name: 'CarouselComponent' })
defineProps<{ subTitle: string; relatedProducts: PopulatedProduct[] }>()
defineEmits<{ goToDetails: [] }>()

const container = ref<HTMLElement | null>(null)
const cards = computed(() => {
  if (!container.value) return [] as Element[]
  return Array.from(container.value.children)
})
const lastIndexVisible = ref(0)

function onIntersectionObserver([{ isIntersecting, target }]: [IntersectionObserverEntry]) {
  if (isIntersecting) {
    lastIndexVisible.value = cards.value.findIndex((element) => element.isSameNode(target)) || 0
  }
}
</script>

<template>
  <section class="bg-slider-bg">
    <div
      class="2xl:container 2xl:h-[1500px] grid grid-cols-12 pb-[50px] md::pb-[250px] 2xl:gap-[42px]"
    >
      <div
        class="col-span-12 2xl:col-span-3 flex sm:flex-row flex-col justify-center gap-8 2xl:gap-0 2xl:flex-col 2xl:justify-end items-center sm:py-8 2xl:py-0 2xl:mb-[250px]"
      >
        <div class="mt-8 sm:mt-0">
          <h3 class="font-trade-bold text-primary text-normal uppercase mb-[42px]">
            {{ subTitle }} collection
          </h3>
          <h2 class="font-minion text-title text-white 2xl:mb-[100px]">Related Pieces</h2>
        </div>

        <div
          class="border-2 w-[220px] h-[220px] border-[#1e1e1e] rounded-[50%] flex flex-col justify-center items-center 2xl:mb-[100px]"
        >
          <picture>
            <img src="@/assets/images/icons/arrow.png" alt="Arrow left" class="pb-[35px]" />
          </picture>

          <h3 class="uppercase text-[14pt] tracking-widest text-white font-trade-bold">Drag</h3>
        </div>

        <div class="font-minion text-[20pt] text-secondary">
          <span class="text-white">{{ lastIndexVisible + 1 }}</span>
          <span>/ {{ relatedProducts.length }}</span>
        </div>
      </div>

      <div
        class="col-span-12 2xl:col-span-9 gap-0 flex items-end mb-[50px] lg:mb-[250px] mt-[30px]"
      >
        <div ref="container" class="flex w-full overflow-x-scroll snap-x snap-mandatory">
          <SliderCard
            v-intersection-observer="[
              onIntersectionObserver as unknown as IntersectionObserverCallback,
              { root: container, threshold: 1 }
            ]"
            v-for="watch in relatedProducts"
            :key="watch.sku"
            v-bind="watch"
            @click="$emit('goToDetails')"
            class="mr-[20px] sm:mr-[40px] w-[75vw] lg:w-[600px] md:mt-[80px] bg-black"
          />
        </div>
      </div>
    </div>
  </section>
</template>
