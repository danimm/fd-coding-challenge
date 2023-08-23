<script lang="ts" setup>
import ProductDescription from '@/components/sections/Product/ProductDescription.vue'
</script>

<script lang="ts">
export default { name: 'TbProduct' }
</script>

<template>
  <div class="grid grid-cols-12 pt-[216px] pb-[136px] max-h-[998px">
    <div class="col-span-4 bg-slider-bg overflow-x-hidden">
      <picture>
        <img
          src="@/assets/images/img01.png"
          alt="Piaget watch"
          class="bg-slider-bg translate-x-[-30px] h-[100%]"
        />
      </picture>
    </div>
    <ProductDescription class="col-start-6 col-span-7" />
  </div>
</template>
