<template lang="pug">
div(id="header")
  q-header(elevated class="glossy")
    q-toolbar
      q-btn(
        flat
        dense
        round
        @click="leftDrawerOpen = !leftDrawerOpen"
        aria-label="Menu"
        icon="menu"
      )
      q-toolbar-title Quasar App {{ counter.count }}
      q-toolbar-title computed {{ counter.doubleCount }} 
      <h5>{{ firstName }}</h5>
      div Quasar v{{ $q.version }}

  QuDrawer(:left-drawer-open="leftDrawerOpen")
</template>
<script setup lang="ts">
import { ref } from 'vue';

import QuDrawer from './QuDrawer.vue';
import {useCounterStore} from "@/stores/counter"

defineProps({
  firstName: {
      type: String,
      default: 'Me'
    }
})

const counter = useCounterStore()
const leftDrawerOpen = ref(false)

</script>

<style lang="scss">
  
</style>
