<script lang="ts" setup>
defineOptions({ name: 'CarouselComponent' })
defineProps<{
  subTitle: string
  carouselLength: number
}>()
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

        <div class="flex gap-10 w-full">
          <div
            class="border-2 w-[220px] h-[220px] border-[#1e1e1e] rounded-[50%] flex flex-col justify-center items-center mb-[100px]"
          >
            <picture class="">
              <img src="@/assets/images/icons/arrow.png" alt="Arrow icon" class="pb-[35px]" />
            </picture>

            <h3 class="uppercase text-[14pt] tracking-widest text-white font-trade-bold">Drag</h3>
          </div>

          <div
            class="border-2 w-[220px] h-[220px] border-[#1e1e1e] rounded-[50%] flex flex-col justify-center items-center mb-[100px]"
          >
            <picture>
              <img src="@/assets/images/icons/arrow-right.png" alt="Arrow icon" class="pb-[35px]" />
            </picture>

            <h3 class="uppercase text-[14pt] tracking-widest text-white font-trade-bold">Drag</h3>
          </div>
        </div>

        <div class="font-minion text-[20pt] text-secondary pl-[82px]">
          <span class="text-white">3</span> <span>/ {{ carouselLength }}</span>
        </div>
      </div>

      <div class="col-span-9 flex items-end">
        <div class="flex w-full overflow-x-scroll snap-x">
          <slot name="slider-card" />
        </div>
      </div>
    </div>
  </div>
</template>
