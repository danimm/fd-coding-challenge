<script lang="ts" setup>
import { getImageUrl } from '@/composables/getImageUrl'

defineOptions({ name: 'SliderCard' })
defineProps<{
  category: string
  subTitle: string
  sku: string
  mainImage: string
  priceFormatted: string
}>()
</script>

<template>
  <RouterLink
    :to="{ name: 'Watch', params: { id: sku } }"
    :key="sku"
    class="snap-center 2xl:snap-end"
  >
    <div v-bind="$attrs">
      <div class="md:translate-y-[-100px]">
        <img
          class="h-[40vh] object-contain md:h-[531px] w-[277px] mx-auto"
          :src="getImageUrl(mainImage)"
          :alt="subTitle"
        />
        <div class="md:mt-[60px] text-center">
          <h4
            class="mb-[35px] tracking-widest text-secondary text-normal font-trade-bold uppercase"
            data-test="category"
          >
            {{ category }}
          </h4>
          <h2
            class="sm:mb-[22px] tracking-wider text-white text-header-text sm:text-title font-minion"
            data-test="subTitle"
          >
            {{ subTitle }}
          </h2>
          <h4
            class="mb-[25px] sm:mb-[65px] tracking-wider text-secondary text-[13pt] font-trade-light"
            data-test="sku"
          >
            Watch {{ sku }}
          </h4>
          <h3
            class="pb-[40px] tracking-wider text-white text-normal sm:text-[20pt] font-minion font-bold"
            data-test="priceFormatted"
          >
            {{ priceFormatted }}
          </h3>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
