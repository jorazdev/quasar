<template lang="pug">
div(id="header")
    div(class="header")
        div(class="header-left")
            q-icon(
                name="menu" 
                size="40px" 
                class="icon"
                @click="isDrawer=!isDrawer"
                )
            h5 {{ appName }}

        div(class="header-right")
            div(class="name") {{ name }}
            div(class="version") {{ version }}

    QuDrawer(:leftDrawerOpen="isDrawer")
    
</template>
<script setup lang="ts">
import { ref } from 'vue';
import QuDrawer from '../header/QuDrawer.vue'


defineProps({
    appName: {
        type: String
    },
    name: {
        type: String
    },
    version: {
        type: String
    }
})

const isDrawer = ref(false)
</script>
<style lang="scss">
    .header {
            width: 100%;
            min-height: 50px;
            background-color: #176CC0;
            color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;

            .header-left {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                .icon {
                    cursor: pointer; 
                }
                h1 {
                    font-size: 15px;
                }
            }

            .header-right {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
            }
        }
</style>