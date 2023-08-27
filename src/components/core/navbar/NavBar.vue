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
          class="w-[70vw] object-contain lg:w-[420px] xl:w-[300px] lg:object-contain 2xl:w-[500px] h-[48px]"
        />
      </picture>
    </a>
  </DefineTemplate>

  <nav
    class="container hidden lg:grid grid-cols-12 gap-[22px] 3xl:gap-[42px] items-end mb-[75px] mt-[55px]"
  >
    <!-- Logo -->
    <div class="3xl:hidden flex justify-center col-span-12 pb-8">
      <ReuseTemplate />
    </div>

    <!-- Left Items -->
    <div class="flex justify-between col-span-6 3xl:text-start 3xl:col-span-4">
      <NavBarLink active-route to="/watches"> Watches </NavBarLink>
      <NavBarLink> Jewellery </NavBarLink>
      <NavBarLink> Wedding </NavBarLink>
    </div>

    <!-- Logo for 3xl -->
    <div class="hidden 3xl:flex justify-center 3xl:col-span-4 pb-3">
      <ReuseTemplate />
    </div>

    <!-- Right Items -->
    <div
      class="flex justify-between col-span-6 col-start-8 3xl:col-start-auto 3xl:text-start 3xl:col-span-4"
    >
      <NavBarLink> Academy </NavBarLink>
      <NavBarLink> Company </NavBarLink>
      <NavBarLink> Stores </NavBarLink>
    </div>
  </nav>

  <NavBarMobile class="lg:hidden mt-[40px]">
    <ReuseTemplate />
  </NavBarMobile>
</template>
