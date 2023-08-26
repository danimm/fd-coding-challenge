<script lang="ts" setup>
import ProductDetailElement from '@/components/sections/Watches/ProductDetailElement.vue'
import type { ProductDetail } from '@/types/Products'

defineOptions({ name: 'ProductDescription' })
defineProps<{
  title: string
  subTitle: string
  details: ProductDetail[]
}>()
</script>

<template>
  <div>
    <div class="lg:pl-4 xl:pl-[200px] lg:mb-4 xl:mb-[166px]">
      <h3 class="font-trade-bold text-normal text-primary uppercase lg:mb-4 xl:mb-[48px] pt-[44px]">
        {{ subTitle }}
      </h3>
      <h2 class="font-minion text-title">{{ title }}</h2>
    </div>

    <div class="grid gap-[42px] grid-cols-8">
      <div class="col-span-8 lg:col-span-4" v-for="(detail, index) in details" :key="index">
        <ProductDetailElement v-bind="detail" />
      </div>
    </div>
  </div>
</template>
