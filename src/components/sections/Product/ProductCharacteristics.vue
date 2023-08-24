<script lang="ts" setup>
import { type ProductCharacteristic } from '@/types/ProductCharacteristic'

defineOptions({ name: 'ProductCharacteristics' })
defineProps<ProductCharacteristic>()

/*
INFO: This is a new feature by Vue 3.3 🪄
1. Reactive Props Destructure
2. Imported and Complex Types Support in Macros
👉🏻 Check this out: https://blog.vuejs.org/posts/vue-3-3

Default props example with new features:
const { property = 'Metal', description = 'Rose gold / Silver' } =
  defineProps<ProductCharacteristic>()

for versions below 3.3, it should be something like this 👇🏻 (TS)
const props defineProps<{ property: string; description: string }>()

OR (old Vue way, but still valid): 👇🏻
const props = defineProps({
  property: { type: String, required: true },
  description: { type: String, required: true }
})

OR if you need defaults (TS): 👇🏻
const props = withDefaults(defineProps<{ property: string; description: string }>(), {
  property: 'Metal',
  description: 'Rose gold / Silver'
})
*/
</script>

<template>
  <div
    class="w-full h-[125px] grid grid-cols-3 gap-[18px] border-b-[1px] border-b-secondary py-[35px]"
  >
    <picture class="pl-[54px]">
      <img class="w-[70px] h-[70px]" src="../../../assets/images/icons/icon-1.png" alt="correa" />
    </picture>
    <div class="col-span-2 flex flex-col justify-between">
      <p class="font-minion text-normal text-secondary">{{ property }}</p>
      <h4 class="font-trade-bold text-normal uppercase">{{ description }}</h4>
    </div>
  </div>
</template>
