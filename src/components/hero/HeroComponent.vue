<script lang="ts" setup>
import ButtonComponent from '@/components/core/ButtonComponent.vue'
import { getImageUrl } from '@/composables/getImageUrl'

defineOptions({ name: 'HeroComponent' })

const selectedIdx = 0
</script>

<template>
  <div class="h-[1970px] pt-[120px] pb-[140px] bg-hero-bg-light">
    <div class="container grid grid-cols-12 gap-[42px]">
      <div class="col-span-6">
        <div class="flex justify-between">
          <div class="flex flex-col justify-center items-start">
            <div class="pb-[33px]" v-for="(image, index) in 3" :key="image">
              <picture>
                <img
                  src="@/assets/images/img01.png"
                  alt="Product image"
                  class="h-[240px] w-[222px] object-contain bg-white"
                  :class="[selectedIdx === index ? 'opacity-100' : 'opacity-30']"
                />
              </picture>
            </div>
          </div>

          <picture>
            <img
              :src="getImageUrl('ultimate.png')"
              alt="Product image"
              class="h-[1776px] max-w-[880px] w-full object-cover"
            />
          </picture>
        </div>
      </div>

      <div class="col-start-8 col-span-5 py-[212px]">
        <div class="grid grid-cols-6">
          <div class="col-span-5">
            <h3 class="font-trade-bold text-normal text-primary pb-[78px] uppercase">
              Piaget Watches
            </h3>
            <h1 class="font-minion text-header-title pb-[132px]">Piaget Altiplano Ultimate 910P</h1>
          </div>

          <div class="col-start-2 col-span-5">
            <h2 class="font-minion text-[28pt] text-primary pb-[80px]">CHF 35'700.00</h2>
            <span class="font-trade-light text-small text-secondary pb-[38px]">
              Watch G0A39111
            </span>
            <p class="font-minion text-header-text text-text pb-[117px] pr-[20px]">
              The thinnest hand-wound mechanical watches in the world. Manufacture Piaget 910P
              ultra-thin, hand-wound mechanical movement.
            </p>
            <ButtonComponent> Add to shopping bag </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
