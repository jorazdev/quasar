<template lang="pug">
q-page(class="flex flex-center")
  img(alt="Quasar logo" src="../assets/logo.svg" style="width: 200px; height: 200px")
  h1 Count: {{ counter.count }}
  q-btn(
    flat
    dense
    round
    @click="counter.increment()"
    aria-label="Menu"
    icon="add_circle"
    size="2em"
  )
  q-icon(name="account_circle" size="60px")
</template>

<style>
</style>

<script setup lang="ts">
import {useCounterStore} from "@/stores/counter"

defineProps({
  firstName: {
    type: String
  }
})
const counter = useCounterStore()

</script>
