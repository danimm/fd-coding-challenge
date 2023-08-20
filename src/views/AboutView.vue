<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'
import { ref } from 'vue'

const counterStore = useCounterStore()
const number = ref(0)
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div>
    <h2>{{ counterStore.count }}</h2>
    <button @click="counterStore.increment()">+</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 80vh;
    display: flex;
    align-items: center;
  }
}
</style>
