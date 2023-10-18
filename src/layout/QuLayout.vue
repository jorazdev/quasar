<template lang="pug">

q-layout(view="lHh Lpr lFf") 
    QuaHeader(:firstName="name") 
    q-page-container(class="page-container")
        RouterView
        
</template>
<script setup lang="ts">
import QuaHeader from '../components/header/QuaHeader.vue'

</script>
<style lang="scss">
    .page-container {
        padding: 50px;
    }
</style>