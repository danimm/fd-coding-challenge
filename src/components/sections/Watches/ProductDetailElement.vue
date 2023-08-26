<script lang="ts" setup>
import type { ProductDetail } from '@/types/Products'
import { getImageUrl } from '@/composables/getImageUrl'

defineOptions({ name: 'ProductDetail' })
defineProps<ProductDetail>()
</script>

<template>
  <div
    class="w-full h-[125px] grid grid-cols-3 gap-[18px] border-b-[1px] border-b-secondary py-[35px]"
  >
    <picture class="pl-[54px]">
      <img
        class="w-[70px] h-[70px] object-cover"
        :src="getImageUrl(`icons/${iconTarget}.png`)"
        :alt="iconTarget"
      />
    </picture>
    <div class="col-span-2 flex flex-col justify-between">
      <p class="font-minion text-normal text-secondary">{{ title }}</p>
      <h4 class="font-trade-bold text-normal uppercase">{{ text }}</h4>
    </div>
  </div>
</template>
