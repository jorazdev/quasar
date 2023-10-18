<!-- eslint-disable @typescript-eslint/no-unused-vars -->

<template lang="pug">
.q-mt-md.col-2(style="width: 20%")
    QuDateTime(v-model="dateTime").q-mb-lg
    q-btn(@click="show" color="primary" label="Primary")

//- .q-mt-md.col-2(style="width: 20%")
//-     InputForm
.q-mt-md.col-2(style="width: 80%")
    TestTime
        template(v-slot:header)
            div foot here

        template(v-slot:footer)
            div head here
</template>
<script setup lang="ts">
import { ref } from 'vue';
import QuDateTime from './components/QuDateTime.vue';
import InputForm from './components/InputForm.vue';
import TestTime from './components/TestTime.vue';

const dateTime = ref('')

// const date = new Date()
// const m = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
// const dateTime = ref(date.toLocaleDateString('en-GB')+' '+date.getHours()+':'+m)


const show = () => {
    console.log('show: '+dateTime.value)
}
</script>
<style lang="scss">

</style>