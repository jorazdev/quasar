<template lang="pug">
QuDateTime
QuInputVue
QuAddButton
</template>
<script setup lang="ts">
import QuInputVue from "./components/QuInput.vue";
import QuAddButton from "./components/QuAddButton.vue";
import QuDateTime from "./components/QuDateTime.vue";

const openCalandar = () => {
    console.log('openCalandar')
}

const save = () => {
    console.log('save')
}
</script>
<style lang="scss">
    
</style>