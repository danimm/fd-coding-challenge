<script lang="ts" setup>
defineOptions({ name: 'NavBar' })
</script>

<template>
  <div class="grid grid-rows-1 grid-cols-12 items-end mb-[75px] mt-[55px]">
    <div class="grid grid-cols-3 text-start col-span-4">
      <a href="" class="no-underline text-black uppercase font-minion text-normal"> Watches </a>
      <a href="" class="no-underline text-black uppercase font-minion text-normal"> Jewellery </a>
      <a href="" class="no-underline text-black uppercase font-minion text-normal"> Wedding </a>
    </div>
    <div class="flex justify-center col-span-4 pb-3">
      <a href="/">
        <picture>
          <img src="@/assets/images/logos/logo.png" alt="The Brand logo" />
        </picture>
      </a>
    </div>
    <div class="grid grid-cols-3 text-end col-span-4">
      <a href="" class="no-underline text-black uppercase font-minion text-normal"> Academy </a>
      <a href="" class="no-underline text-black uppercase font-minion text-normal"> Company </a>
      <a href="" class="no-underline text-black uppercase font-minion text-normal"> Stores </a>
    </div>
  </div>
</template>
