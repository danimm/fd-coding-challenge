<script lang="ts" setup>
defineOptions({ name: 'NavIcon' })
defineProps<{ src: string; alt: string }>()
defineEmits<{ clicked: [] }>()
</script>

<template>
  <picture>
    <img @click="$emit('clicked')" :src="src" :alt="alt" />
  </picture>
</template>
