<script lang="ts" setup>
defineOptions({ name: 'ButtonComponent' })

defineProps<{ to?: string }>()
</script>

<template>
  <a :href="to">
    <button
      class="w-full max-w-[480px] max-h-[125px] px-[70px] py-[20px] sm:py-[30px] 2xl:p-[47px] tracking-wider uppercase font-bold sm:text-normal bg-primary text-white rounded-[5px]"
      v-bind="$attrs"
    >
      <slot />
    </button>
  </a>
</template>
