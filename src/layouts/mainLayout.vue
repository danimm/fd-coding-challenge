<script lang="ts" setup>
import NavIconsList from '@/components/core/navbar/NavIconsList.vue'
import NavBar from '@/components/core/navbar/NavBar.vue'
import FooterComponent from '@/components/core/footer/FooterComponent.vue'

defineOptions({ name: 'MainLayout' })
</script>

<template>
  <div>
    <NavIconsList />
    <NavBar />
    <slot />
    <FooterComponent />
  </div>
</template>
