<!-- eslint-disable @typescript-eslint/no-unused-vars -->

<template lang="pug">
//- .q-mt-md.col-2(style="width: 20%")
//-     QuDateTime(v-model="dateTime").q-mb-lg
//-     q-btn(@click="show" color="primary" label="Primary")
.q-mt-md.col-2
    TestDate(v-model="dateTime")

.q-mt-md.col-2(style="width: 50%")
    h1 {{ dateTime }}
   
.q-mt-md.col-2
    TestDate(v-model="date" :withTime="false")

.q-mt-md.col-2(style="width: 50%")
    h1 {{ date }}
        
</template>
<script setup lang="ts">
import { ref } from 'vue';
import QuDateTime from './components/QuDateTime.vue';
import InputForm from './components/InputForm.vue';
import TestDate from './components/TestDate.vue';

const dateTime = ref('')
const date = ref('')

// const date = new Date()
// const m = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
// const dateTime = ref(date.toLocaleDateString('en-GB')+' '+date.getHours()+':'+m)


const show = () => {
    console.log('show: '+dateTime.value)
}
</script>
<style lang="scss">

</style>