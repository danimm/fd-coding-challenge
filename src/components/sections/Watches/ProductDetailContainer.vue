<script lang="ts" setup>
defineOptions({ name: 'ProductDetailContainer' })

defineSlots<{
  ['left-position'](props: {}): any
  ['right-position'](props: {}): any
}>()

defineProps<{ descriptionFirst?: boolean }>()
</script>

<template>
  <div
    class="lex flex-col xl:grid xl:grid-cols-12 pt-0 pb-[150px] md:py-[100px] xl:pt-[216px] xl:pb-[136px] xl:max-h-[998px"
  >
    <div
      class="h-[100%]"
      :class="[
        descriptionFirst ? 'order-2 xl:col-span-7 pb-8 xl:pb-0' : 'xl:col-span-5 3xl:col-span-4'
      ]"
    >
      <slot name="left-position" />
    </div>
    <div
      :class="[
        descriptionFirst ? 'order-1 col-start-9 xl:col-span-5' : '3xl:col-start-6 xl:col-span-7'
      ]"
    >
      <slot name="right-position" />
    </div>
  </div>
</template>
