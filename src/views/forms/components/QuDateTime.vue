<template lang="pug">
.q-pa-xs
    q-input(color='purple-12' v-model='date' label='Date')
        template(v-slot:prepend='')
            q-icon(name='event' @click="openCalandar" class="cursor-pointer")
                q-popup-proxy(@before-show="updateProxy" cover transition-show="scale" transition-hide="scale")
                    q-date(v-model='proxyDate' mask="DD/MM/YYYY" :locale='locale')
                        .row.items-center.justify-end.q-gutter-sm
                            q-btn(label="Cancel" color="primary" flat v-close-popup)
                            q-btn(label="OK" color="primary" flat @click="save" v-close-popup)
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';


const date = ref('01/03/2019')
const proxyDate = ref('01/03/2019')
const locale = reactive({
    daysShort: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    monthsShort: ['Janv', 'Fevr', 'Mars', 'Avri', 'Mai', 'Juin', 'Juil', 'Aout', 'Sept', 'Octo', 'Nove', 'Dece']
})

const updateProxy  = () => {
    proxyDate.value = date.value
}

const save = () => {
    console.log(proxyDate.value)
    date.value = proxyDate.value
}
</script>
<style lang="scss">
    
</style>