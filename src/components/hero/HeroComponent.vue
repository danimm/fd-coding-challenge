<script lang="ts" setup>
defineOptions({ name: 'HeroComponent' })

const selectedIdx = 0
</script>

<template>
  <div class="h-[1970px] pt-[120px] pb-[140px] bg-hero-bg-light mx-[40px]">
    <div class="container grid grid-cols-12 gap-[50px]">
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

          <div class="">
            <picture>
              <img
                src="@/assets/images/ultimate.png"
                alt="Product image"
                class="h-[1776px] max-w-[880px] w-full object-cover"
              />
            </picture>
          </div>
        </div>
      </div>

      <div class="col-span-6 py-[212px]">
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
            <a href="#">
              <button
                class="w-full max-w-[480px] max-h-[125px] p-[47px] tracking-wider uppercase font-bold text-normal bg-primary text-white rounded-[5px]"
              >
                Add to shopping bag
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
