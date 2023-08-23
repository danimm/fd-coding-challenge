<script lang="ts" setup>
defineOptions({ name: 'NavBar' })
</script>

<template>
  <div class="grid grid-cols-12 gap-[42px] items-end mb-[75px] mt-[55px]">
    <!-- Left Items -->
    <div class="grid grid-cols-3 text-start col-span-4">
      <a
        href="#"
        class="no-underline text-black uppercase font-minion font-bold tracking-widest text-normal"
      >
        Watches
      </a>
      <a
        href="#"
        class="no-underline text-black uppercase font-minion font-bold tracking-widest text-normal"
      >
        Jewellery
      </a>
      <a
        href="#"
        class="no-underline text-black uppercase font-minion font-bold tracking-widest text-normal"
      >
        Wedding
      </a>
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
      <a
        href="#"
        class="no-underline text-black uppercase font-minion font-bold tracking-widest text-normal"
      >
        Academy
      </a>
      <a
        href="#"
        class="no-underline text-black uppercase font-minion font-bold tracking-widest text-normal"
      >
        Company
      </a>
      <a
        href="#"
        class="no-underline text-black uppercase font-minion font-bold tracking-widest text-normal"
      >
        Stores
      </a>
    </div>
  </div>
</template>
