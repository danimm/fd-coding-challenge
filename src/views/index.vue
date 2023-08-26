<script setup lang="ts">
import { onMounted } from 'vue'

import { useWatches } from '@/composables/useWatches'

defineOptions({ name: 'HomeView' })

const { fetchAllWatchesWithPrices } = useWatches()

onMounted(async () => {
  await fetchAllWatchesWithPrices()
})
</script>

<template>
  <div class="mx-[40px]">
    <h1>Home page</h1>
  </div>
</template>
