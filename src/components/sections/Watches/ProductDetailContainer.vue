<script lang="ts" setup>
defineOptions({ name: 'ProductDetailContainer' })

defineSlots<{
  ['left-position'](props: {}): any
  ['right-position'](props: {}): any
}>()

defineProps<{ descriptionFirst?: boolean; firstElement?: boolean }>()
</script>

<template>
  <section
    class="sm:container flex-col xl:grid xl:grid-cols-12 pt-0 pb-[150px] md:py-[100px] xl:pb-[136px] xl:max-h-[998px"
    :class="{ 'xl:pt-[216px]': firstElement }"
  >
    <div
      class="h-[100%]"
      :class="[
        descriptionFirst ? 'order-1 xl:col-span-6 pb-8 xl:pb-0' : 'xl:col-span-5 3xl:col-span-5'
      ]"
    >
      <slot name="left-position" />
    </div>

    <div
      :class="[
        descriptionFirst
          ? 'order-1 xl:col-start-8 xl:col-span-6'
          : '3xl:col-start-7 3xl:col-span-6 xl:col-start-7 xl:col-span-7'
      ]"
    >
      <slot name="right-position" />
    </div>
  </section>
</template>
