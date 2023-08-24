<script lang="ts" setup>
import ProductItem from '@/components/sections/Product/ProductItem.vue'
import ProductImage from '@/components/sections/Product/ProductImage.vue'
import ProductDescription from '@/components/sections/Product/ProductDescription.vue'

defineOptions({ name: 'ProductsContainer' })
</script>

<template>
  <div class="container">
    <ProductItem descriptionFirst>
      <template #left-position>
        <ProductDescription />
      </template>

      <template #right-position>
        <ProductImage />
      </template>
    </ProductItem>

    <ProductItem>
      <template #left-position>
        <ProductImage image-overflow zoom />
      </template>
      <template #right-position>
        <ProductDescription />
      </template>
    </ProductItem>
  </div>
</template>
