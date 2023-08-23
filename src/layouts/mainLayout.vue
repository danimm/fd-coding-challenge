<script lang="ts" setup>
import NavIconsList from '@/components/core/navbar/NavIconsList.vue'
import NavBar from '@/components/core/navbar/NavBar.vue'

defineOptions({ name: 'MainLayout' })
</script>

<template>
  <div class="container lg:container 2xl:container 4xl:container">
    <NavIconsList />
    <NavBar />
    <slot />
    <!--    <FooterComponent />-->
  </div>
</template>
