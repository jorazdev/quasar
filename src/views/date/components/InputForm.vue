<template lang="pug">
q-input(filled v-model="date")
    template(v-slot:prepend)
        q-icon(name="event").cursor-pointer
            q-popup-proxy(cover transition-show="scale" transition-hide="scale") 
</template>
<script setup lang="ts">
import {ref} from 'vue'

const date = ref('')
</script>
<style lang="scss">
    
</style>