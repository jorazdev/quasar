<template lang="pug">
HelloWorld(:firstName="name")
    
</template>
<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { ref } from 'vue'


const name = ref('Jocelyn')

</script>
<style lang="scss">
    #page {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>