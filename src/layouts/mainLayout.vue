<script lang="ts" setup>
import NavIconsList from '@/components/core/NavIconsList.vue'

defineOptions({ name: 'MainLayout' })
</script>

<template>
  <div class="container lg:container 2xl:container 4xl:container">
    <NavIconsList />
    <slot />
    <!--    <FooterComponent />-->
  </div>
</template>
