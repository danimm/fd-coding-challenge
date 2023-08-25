<script setup lang="ts">
import HomeView from '@/views/index.vue'
import MainLayout from '@/layouts/mainLayout.vue'
</script>

<template>
  <main>
    <MainLayout>
      <!-- In a much larger application this would be the place -->
      <!-- where we would put our <RouterView /> -->
      <RouterView />
    </MainLayout>
  </main>
</template>
