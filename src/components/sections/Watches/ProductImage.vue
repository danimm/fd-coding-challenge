<script lang="ts" setup>
import { computed } from 'vue'
import { getImageUrl } from '@/composables/getImageUrl'

defineOptions({ name: 'ProductImage' })

const props = defineProps({
  image: { type: String, required: true },
  imageOverflow: { type: Boolean, default: false },
  zoom: { type: Boolean, default: false },
  centered: { type: Boolean, default: false }
})

const zoomPercentage = computed(() => (props.zoom ? 'h-[120%]' : 'h-[100%]'))

const imageDynamicStyles = computed(() => ({
  'translate-x-[-30px]': props.imageOverflow,
  [zoomPercentage.value]: props.zoom,
  'mx-auto': props.centered
}))
</script>

<template>
  <div :class="{ 'overflow-y-hidden': imageOverflow }" class="watch bg-slider-bg h-[100%]">
    <picture>
      <img
        :class="imageDynamicStyles"
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
