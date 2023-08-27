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
      <div class="pt-[19px] translate-y-[-100px]">
        <img class="h-[531px] w-[277px] mx-auto" :src="getImageUrl(mainImage)" :alt="subTitle" />
        <div class="mt-[60px] text-center">
          <h4
            class="mb-[35px] tracking-widest text-secondary text-normal font-trade-bold uppercase"
            data-test="category"
          >
            {{ category }}
          </h4>
          <h2
            class="mb-[22px] tracking-wider text-white text-title font-minion text-5xl"
            data-test="subTitle"
          >
            {{ subTitle }}
          </h2>
          <h4
            class="mb-[65px] tracking-wider text-secondary text-[13pt] font-trade-light"
            data-test="sku"
          >
            Watch {{ sku }}
          </h4>
          <h3
            class="pb-[17px] tracking-wider text-white text-[20pt] font-minion font-bold"
            data-test="priceFormatted"
          >
            {{ priceFormatted }}
          </h3>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
