<script lang="ts" setup>
defineOptions({ name: 'NavBarLink' })

withDefaults(defineProps<{ to?: string; activeRoute?: boolean }>(), {
  to: '',
  activeRoute: false
})
</script>

<template>
  <RouterLink
    :to="to"
    class="transition-transform no-underline text-black uppercase font-minion font-bold tracking-widest sm:text-normal"
    :class="{
      'hover:scale-110 hover:text-primary ': !activeRoute
    }"
  >
    <span class="relative" :class="{ 'active-route': activeRoute }" data-test="link">
      <slot />
    </span>
  </RouterLink>
</template>

<style scoped>
.active-route {
  @apply text-primary scale-110;
}

.active-route::before {
  content: '';
  position: absolute;
  width: 120%;
  height: 3px;
  bottom: -10px;
  left: -10px;
  @apply bg-primary text-primary;
}
</style>
