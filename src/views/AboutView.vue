<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>Count: {{ counter.count }}</h1>
    <router-link to="/page">Go to page</router-link>
  </div>
</template>
<script setup  lang="ts">
import { useCounterStore } from '@/stores/counter';
 
const counter = useCounterStore()

</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
