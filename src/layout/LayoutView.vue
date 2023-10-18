<template lang="pug">
div(id="layout")
    QuHeader(
        appName="Quasar" 
        name="Jocelyn RAZ" 
        :version="$q.version"
        )
    RouterView
</template>
<script setup lang="ts">
import QuHeader from '../components/header/QuHeader.vue'


</script>
<style lang="scss">
    #layout {
        
    }
</style>