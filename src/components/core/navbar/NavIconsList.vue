<script lang="ts" setup>
import NavIcon from '@/components/core/navbar/NavIcon.vue'
import contactIcon from '@/assets/images/icons/contact.png'
import storesIcon from '@/assets/images/icons/stores.png'
import languageIcon from '@/assets/images/icons/language.png'
import bagIcon from '@/assets/images/icons/bag.png'
import wishlistIcon from '@/assets/images/icons/wishlist.png'
import loginIcon from '@/assets/images/icons/login.png'
import searchIcon from '@/assets/images/icons/search.png'

defineOptions({ name: 'NavIconsList' })

type EmitEvents = {
  'contact-icon-clicked': []
  'stores-icon-clicked': []
  'language-icon-clicked': []
  'bag-icon-clicked': []
  'wishlist-icon-clicked': []
  'login-icon-clicked': []
  'search-icon-clicked': []
}

const emits = defineEmits<EmitEvents>()

interface NavigationIcon {
  src: string
  alt: string
  eventHandler: any
}

const leftNavIcons: NavigationIcon[] = [
  {
    src: contactIcon,
    alt: 'Contact icon',
    eventHandler: emits('contact-icon-clicked')
  },
  {
    src: storesIcon,
    alt: 'Stores icon',
    eventHandler: emits('stores-icon-clicked')
  },
  {
    src: languageIcon,
    alt: 'Language icon',
    eventHandler: emits('language-icon-clicked')
  }
]

const rightNavIcons: NavigationIcon[] = [
  {
    src: bagIcon,
    alt: 'Contact icon',
    eventHandler: emits('contact-icon-clicked')
  },
  {
    src: wishlistIcon,
    alt: 'Wish icon',
    eventHandler: emits('wishlist-icon-clicked')
  },
  {
    src: loginIcon,
    alt: 'Login icon',
    eventHandler: emits('login-icon-clicked')
  },
  {
    src: searchIcon,
    alt: 'Search icon',
    eventHandler: emits('search-icon-clicked')
  }
]
</script>

<template>
  <div class="container grid grid-cols-1 md:flex md:justify-between mb-[44px] lg:mt-[44px]">
    <div
      class="col-span-1 flex gap-[60px] justify-center md:justify-between items-center mb-8 md:mb-0"
    >
      <NavIcon
        v-for="({ src, alt, eventHandler }, index) in leftNavIcons"
        :key="index"
        :src="src"
        :alt="alt"
        @clicked="eventHandler"
      />
    </div>

    <div
      class="col-span-1 flex gap-[30px] sm:gap-[60px] md:gap-[60px] justify-center md:justify-between items-center"
    >
      <NavIcon
        v-for="({ src, alt, eventHandler }, index) in rightNavIcons"
        :key="index"
        :src="src"
        :alt="alt"
        @clicked="eventHandler"
      />
    </div>
  </div>
</template>
