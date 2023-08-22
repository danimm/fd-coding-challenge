<script lang="ts" setup>
defineOptions({
  name: 'SliderCard'
})
</script>

<template>
  <div class="w-[620px] mt-[100px]">
    <div class="h-[800px] bg-black flex flex-col items-center pb-[112px]">
      <img
        class="h-[540px] w-[280px] translate-y-[-100px] mb-[-100px]"
        src="@/assets/images/img01.png"
        alt="Altiplano watch"
      />
      <h4
        class="pt-[54px] tracking-widest text-secondary leading-[19.2px] text-subheader font-trade-bold uppercase"
      >
        Piaget
      </h4>
      <h2 class="pt-[35px] tracking-wider text-white text-title font-minion text-5xl">Altiplano</h2>
      <h4 class="pt-[20px] tracking-wider text-secondary text-[13pt ] font-trade-light">
        Watch G0A39111
      </h4>
      <h3 class="pt-[58px] tracking-wider text-white text-[20pt] font-minion font-bold">
        CHF 24'900.00
      </h3>
    </div>
  </div>
</template>
