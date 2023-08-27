<script lang="ts" setup>
import { ref } from 'vue'
import NavBarLink from '@/components/core/navbar/NavBarLink.vue'
import NavIconsList from '@/components/core/navbar/NavIconsList.vue'

defineOptions({ name: 'NavBarMobile' })
const links = [
  { path: '/watches', text: 'Watches', active: true },
  { path: '#', text: 'Jewellery', active: false },
  { path: '#', text: 'Wedding', active: false },
  { path: '#', text: 'Academy', active: false },
  { path: '#', text: 'Company', active: false },
  { path: '#', text: 'Stores', active: false }
]

const isOpen = ref(false)
</script>

<template>
  <!-- Icons -->
  <div class="px-[20px] md:container lg:hidden">
    <div class="grid grid-cols-12">
      <div class="col-span-11 flex justify-center pb-[50px]">
        <slot />
      </div>
      <!-- NavBarIcon container -->
      <div class="w-full col-span-1 flex justify-end">
        <div class="flex flex-col justify-start" :class="{ 'pb-8': !isOpen }">
          <div @click="isOpen = !isOpen">
            <button v-if="!isOpen" data-test="burger">
              <svg
                class="hover:text-primary text-slider-bg fill-current"
                width="60"
                height="60"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000000"
                  fill-rule="evenodd"
                  d="M0 3.75A.75.75 0 0 1 .75 3h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 3.75ZM0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8Zm.75 3.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H.75Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <button v-else data-test="close">
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="hover:text-primary text-slider-bg fill-current"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
                  />
                  <path
                    fill="#000000"
                    d="m12 13.414l5.657 5.657a1 1 0 0 0 1.414-1.414L13.414 12l5.657-5.657a1 1 0 0 0-1.414-1.414L12 10.586L6.343 4.929A1 1 0 0 0 4.93 6.343L10.586 12l-5.657 5.657a1 1 0 1 0 1.414 1.414L12 13.414Z"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Links -->
    <NavIconsList v-if="isOpen" />

    <div
      v-if="isOpen"
      class="w-full grid lg:grid-cols-3 grid-cols-2 gap-[40px] text-center mb-[42px]"
    >
      <div v-for="({ path, text, active }, index) in links" :key="index" class="col-span-1">
        <NavBarLink :active-route="active" :to="path"> {{ text }} </NavBarLink>
      </div>
    </div>
  </div>
</template>
