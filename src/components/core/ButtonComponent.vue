<script lang="ts" setup>
defineOptions({ name: 'ButtonComponent' })

defineProps<{ to?: string }>()
</script>

<template>
  <a :href="to">
    <button
      class="w-full max-w-[480px] max-h-[125px] p-[47px] tracking-wider uppercase font-bold text-normal bg-primary text-white rounded-[5px]"
      v-bind="$attrs"
    >
      <slot />
    </button>
  </a>
</template>
