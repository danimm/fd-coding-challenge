<script lang="ts" setup>
defineOptions({ name: 'NavIcon' })
defineProps<{ src: string; alt: string }>()
defineEmits<{ clicked: [] }>()
</script>

<template>
  <picture>
    <img
      class="h-[30px] w-[30px] lg::h-auto md:w-auto object-contain"
      @click="$emit('clicked')"
      :src="src"
      :alt="alt"
    />
  </picture>
</template>
