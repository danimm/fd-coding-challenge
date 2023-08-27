<script lang="ts" setup>
import { getImageUrl } from '@/composables/getImageUrl'

defineOptions({ name: 'ProductImage' })
defineProps<{ image: string }>()
</script>

<template>
  <div class="watch bg-slider-bg h-[100%]">
    <picture>
      <img
        :src="getImageUrl(image)"
        alt="Piaget watch"
        class="bg-slider-bg h-[100%] object-cover"
      />
    </picture>
  </div>
</template>

<style scoped>
@keyframes show {
  from {
    opacity: 0;
    scale: 25%;
  }
  to {
    opacity: 1;
    scale: 100%;
  }
}

.watch {
  view-timeline: --image;
  view-timeline-axis: block;
  animation-timeline: --image;

  animation-name: show;
  animation-duration: 2s;
  animation-range: entry 5% cover 50%;
  animation-fill-mode: both;
}
</style>
