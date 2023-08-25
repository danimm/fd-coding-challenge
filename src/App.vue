<script setup lang="ts">
import MainLayout from '@/layouts/mainLayout.vue'
</script>

<template>
  <main>
    <MainLayout>
      <Transition name="fade">
        <RouterView />
      </Transition>
    </MainLayout>
  </main>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
