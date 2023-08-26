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
  <div :class="{ 'overflow-y-hidden': imageOverflow }" class="bg-slider-bg h-[100%]">
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
