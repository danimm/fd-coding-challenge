<script lang="ts" setup>
import NavBarLink from '@/components/core/navbar/NavBarLink.vue'
import NavBarMobile from '@/components/core/navbar/NavBarMobile.vue'

defineOptions({ name: 'NavBar' })

import { createReusableTemplate } from '@vueuse/core'

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate>
    <a href="/">
      <picture>
        <img
          src="@/assets/images/logos/logo.png"
          alt="The Brand logo"
          class="lg:w-[420px] xl:w-[300px] lg:object-contain 2xl:w-[500px] h-[48px]"
        />
      </picture>
    </a>
  </DefineTemplate>

  <nav
    class="container hidden lg:grid lg:grid-cols-9 2xl:grid-cols-12 xl:gap-[22px] 2xl:gap-[42px] items-end mb-[75px] mt-[55px]"
  >
    <!-- Logo on lg -->
    <div class="xl:hidden flex justify-center col-span-9 pb-8">
      <ReuseTemplate />
    </div>

    <!-- Left Items -->
    <div class="flex justify-between lg:col-span-4 xl:col-span-3 2xl:text-start 2xl:col-span-4">
      <NavBarLink active-route to="/watches"> Watches </NavBarLink>
      <NavBarLink> Jewellery </NavBarLink>
      <NavBarLink> Wedding </NavBarLink>
    </div>

    <!-- Logo up xl -->
    <div class="hidden xl:flex justify-center xl:col-span-3 2xl:col-span-4 pb-3">
      <ReuseTemplate />
    </div>

    <!-- Right Items -->
    <div class="flex justify-between lg:col-start-6 lg:col-span-4 xl:col-span-3 2xl:col-span-4">
      <NavBarLink> Academy </NavBarLink>
      <NavBarLink> Company </NavBarLink>
      <NavBarLink> Stores </NavBarLink>
    </div>
  </nav>

  <NavBarMobile class="lg:hidden mt-[40px]" />
</template>
