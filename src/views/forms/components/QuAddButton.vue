<template lang="pug">
.q-pa-md
  .q-mb-sm
    q-badge(color='teal')
      | Model: {{ date }}
  q-btn(icon='event' round='' color='primary')
    q-popup-proxy(@before-show='updateProxy' cover='' transition-show='scale' transition-hide='scale')
      q-date(v-model='proxyDate')
        .row.items-center.justify-end.q-gutter-sm
          q-btn(label='Cancel' color='primary' flat='' v-close-popup='')
            q-btn(label='OK' color='primary' flat='' @click='save' v-close-popup='')
</template>
<script setup lang="ts">
import { ref } from 'vue';


const date = ref('2019/03/01')
const proxyDate = ref('2019/03/01')

const updateProxy  = () => {
    proxyDate.value = date.value
}

const save = () => {
    date.value = proxyDate.value
}


</script>
<style lang="">
    
</style>