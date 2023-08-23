<script lang="ts" setup>
import ProductCharacteristics from '@/components/sections/Product/ProductCharacteristics.vue'

defineOptions({ name: 'ProductDescription' })
</script>

<template>
  <div>
    <h3 class="font-trade-bold text-normal text-primary uppercase mb-[48px] pt-[44px]">
      Specifications
    </h3>
    <h2 class="font-minion text-title">Product Characteristics</h2>

    <div class="grid gap-[42px] grid-cols-7">
      <div class="col-span-3">
        <ProductCharacteristics property="Metal" description="Rose gold / Silver" />
        <ProductCharacteristics property="Metal" description="Rose gold / Silver" />
        <ProductCharacteristics property="Metal" description="Rose gold / Silver" />
        <ProductCharacteristics property="Metal" description="Rose gold / Silver" />
      </div>

      <div class="col-start-5 col-span-3">
        <ProductCharacteristics property="Metal" description="Rose gold / Silver" />
        <ProductCharacteristics property="Metal" description="Rose gold / Silver" />
        <ProductCharacteristics property="Metal" description="Rose gold / Silver" />
        <ProductCharacteristics property="Metal" description="Rose gold / Silver" />
      </div>
    </div>
  </div>
</template>
