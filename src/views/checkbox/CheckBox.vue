<template lang="pug">
.q-my-lg
    CheckBoxList(v-model="checkboxs" title="Account settings" :items="items")
    .q-mt-md.q-gutter-sm
        .text-h1 {{ checkboxs.join(', ') }}

</template>
<script setup lang="ts">
import { ref } from 'vue'

import CheckBoxList from './components/ChekBoxList.vue'

const checkboxs = ref([])
const items = ref<string[]>(['Teal', 'Orange', 'Red', 'Cyan'])

</script>
<style lang="scss">
    
</style>