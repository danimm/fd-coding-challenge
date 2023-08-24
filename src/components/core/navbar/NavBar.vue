<script lang="ts" setup>
import NavBarLink from '@/components/core/navbar/NavBarLink.vue'

defineOptions({ name: 'NavBar' })
</script>

<template>
  <div class="container grid grid-cols-12 gap-[42px] items-end mb-[75px] mt-[55px]">
    <!-- Left Items -->
    <div class="grid grid-cols-3 text-start col-span-4">
      <NavBarLink active-route> Watches </NavBarLink>
      <NavBarLink> Jewellery </NavBarLink>
      <NavBarLink> Wedding </NavBarLink>
    </div>

    <!-- Logo -->
    <div class="flex justify-center col-span-4 pb-3">
      <a href="/">
        <picture>
          <img
            src="@/assets/images/logos/logo.png"
            alt="The Brand logo"
            class="w-[500px] h-[48px]"
          />
        </picture>
      </a>
    </div>

    <!-- Right Items -->
    <div class="grid grid-cols-3 text-end col-span-4">
      <NavBarLink> Academy </NavBarLink>
      <NavBarLink> Company </NavBarLink>
      <NavBarLink> Stores </NavBarLink>
    </div>
  </div>
</template>

<style scoped>
.active-route {
  position: relative;
  @apply text-primary font-trade-bold;
}

.active-route::before {
  content: '';
  position: absolute;
  background-color: pink;
  width: 100%;
  height: 3px;
  bottom: -10px;
  left: 0;
  @apply bg-primary text-primary;
}
</style>
