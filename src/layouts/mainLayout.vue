<script lang="ts" setup>
import NavIconsList from '@/components/core/navbar/NavIconsList.vue'
import NavBar from '@/components/core/navbar/NavBar.vue'
import FooterComponent from '@/components/core/footer/FooterComponent.vue'

defineOptions({ name: 'MainLayout' })
</script>

<template>
  <div>
    <div class="hidden lg:block">
      <NavIconsList />
    </div>

    <NavBar />

    <!-- Current Page Component -->
    <slot />

    <FooterComponent />
  </div>
</template>
