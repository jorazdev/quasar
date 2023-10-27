<!-- eslint-disable @typescript-eslint/no-unused-vars -->

<template lang="pug">
.q-mt-md.col-2
    QuDateTime(v-model="dateTime")

.q-mt-md.col-2(style="width: 50%")
    h1 {{ dateTime }}
   
.q-mt-md.col-2
    QuDateTime(v-model="date" :withTime="false")

.q-mt-md.col-2(style="width: 50%")
    h1 {{ date }}

</template>
<script setup lang="ts">
import { ref } from 'vue';
import QuDateTime from './components/QuDateTime.vue';

const dateTime = ref() //'26/10/2023 11:53'
const date = ref('')

</script>
<style lang="scss">

</style>