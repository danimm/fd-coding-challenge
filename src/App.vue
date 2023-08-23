<script setup lang="ts">
import HomeView from '@/views/HomeView.vue'
import MainLayout from '@/layouts/mainLayout.vue'
</script>

<template>
  <main>
    <MainLayout>
      <!-- In a much larger application this would be the place -->
      <!-- where we would put our <RouterView /> -->
      <HomeView />
    </MainLayout>
  </main>
</template>
