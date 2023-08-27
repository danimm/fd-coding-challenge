<script lang="ts" setup>
defineOptions({ name: 'FooterComponent' })
</script>

<template>
  <footer class="sm:container px-8 sm:px-0 grid grid-cols-12 my-[50px] lg:mb-[245px] lg:mt-[225px]">
    <!-- Contact -->
    <div class="col-span-12 md:col-span-4 2xl:col-span-2 pb-8 md:pb-0">
      <picture>
        <img
          src="@/assets/images/logos/logo.png"
          alt="The Brand Logo"
          class="object-contain w-[306px] h-[33px] mb-[45px]"
        />
      </picture>

      <p class="font-trade text-[15pt] mb-[25px]" data-test="address">Walchestrasse 9</p>
      <p class="font-trade text-[15pt] mb-[75px]" data-test="zip">8006 Zürich</p>

      <div>
        <div class="md:flex md:justify-between">
          <p class="inline pr-8 md:pr-0 md:block uppercase font-trade-bold text-[15pt]">T</p>
          <a
            href="tel:+41010203040"
            target="_blank"
            class="font-trade text-[15pt] text-black no-underline"
            data-test="tel"
          >
            + 41 (0) 10 20 30 40
          </a>
        </div>
      </div>

      <div>
        <div class="md:flex md:justify-between">
          <p class="inline pr-8 md:pr-0 md:block uppercase font-trade-bold text-[15pt]">F</p>
          <a
            href="tel:+41010203040"
            target="_blank"
            class="font-trade text-[15pt] text-black no-underline"
            data-test="fax"
          >
            + 41 (0) 50 60 70 80
          </a>
        </div>
      </div>

      <div>
        <div class="md:flex md:justify-between">
          <p class="inline pr-8 md:pr-0 md:block uppercase font-trade-bold text-[15pt]">M</p>
          <a
            href="mailto:contact@thebrand.com"
            target="_blank"
            class="font-trade text-[15pt] text-primary no-underline"
            data-test="email"
          >
            contact@thebrand.com
          </a>
        </div>
      </div>
    </div>

    <!-- Customer Care -->
    <div
      class="col-span-12 sm:col-span-6 md:col-span-4 2xl:col-start-4 2xl:col-span-2 flex flex-col items-start md:items-center"
    >
      <div class="text-left">
        <h4 class="uppercase font-trade-bold font-normal mb-[45px]">Customer care</h4>

        <a href="" class="block no-underline text-[15pt] text-secondary">Contact Us</a>
        <a href="" class="block no-underline text-[15pt] text-secondary">Track your order</a>
        <a href="" class="block no-underline text-[15pt] text-secondary">Returns</a>
        <a href="" class="block no-underline text-[15pt] text-secondary">FAQ's</a>
        <a href="" class="block no-underline text-[15pt] text-secondary">Location Finder</a>
        <a href="" class="block no-underline text-[15pt] text-secondary">Service</a>
        <a href="" class="block no-underline text-[15pt] text-secondary">Product Care</a>
        <a href="" class="block no-underline text-[15pt] text-secondary">Gift Cards</a>
        <a href="" class="block no-underline text-[15pt] text-secondary">Sell your jewellery</a>
      </div>
    </div>

    <!-- Stay in touch -->
    <div
      class="mt-8 sm:mt-0 col-span-12 sm:col-span-6 md:col-span-4 2xl:col-start-7 2xl:col-span-2"
    >
      <h4 class="uppercase font-trade-bold font-normal mb-[44px]">Stay in touch</h4>

      <a href="#" class="block no-underline text-[15pt] text-secondary"
        >Sign up to our Newsletter</a
      >
      <a href="#" class="block no-underline text-[15pt] text-secondary">Magazine Download</a>
    </div>
  </footer>
  <div class="container">
    <p class="font-trade text-[13pt] text-secondary mb-[73px]">© Copyright 2018 The Brand</p>
  </div>
</template>
