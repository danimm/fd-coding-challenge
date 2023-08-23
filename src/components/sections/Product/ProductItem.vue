<script lang="ts" setup>
defineOptions({ name: 'ProductItem' })

defineSlots<{
  ['left-position'](props: {}): any
  ['right-position'](props: {}): any
}>()

defineProps<{ descriptionFirst?: boolean }>()
</script>

<template>
  <div class="grid grid-cols-12 pt-[216px] pb-[136px] max-h-[998px">
    <div class="col-start-1 h-[100%]" :class="[descriptionFirst ? 'col-span-7' : 'col-span-4']">
      <slot name="left-position" />
    </div>
    <div :class="[descriptionFirst ? 'col-start-9 col-span-4' : 'col-start-6 col-span-7']">
      <slot name="right-position" />
    </div>
  </div>
</template>
