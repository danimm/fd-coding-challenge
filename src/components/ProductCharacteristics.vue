<script lang="ts" setup>
defineOptions({
  name: 'ProductCharacteristics'
})
</script>

<template>
  <div
    class="w-[620px] h-[125px] grid grid-cols-3 gap-[18px] border-b-[1px] border-b-secondary py-[35px]"
  >
    <div class="pl-[54px]">
      <img class="w-[70px] h-[70px]" src="@/assets/images/icons/icon-1.png" alt="correa" />
    </div>
    <div class="col-span-2 flex flex-col justify-between">
      <p class="font-minion text-normal text-secondary">Metal</p>
      <h4 class="font-trade-bold text-normal uppercase">Rose gold / Silver</h4>
    </div>
  </div>
</template>
