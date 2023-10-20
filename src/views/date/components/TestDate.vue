<template lang="pug">
.q-pa-md(style='max-width: 300px')
    q-input(:model-value="modelValue" @update:model-value="inputValue($event)" :disable="props.disabled")
      template(v-slot:append='')
        q-icon.cursor-pointer(name='event')
          q-popup-proxy(@before-show="updateProxy()" cover='' transition-show='scale' transition-hide='scale')
            q-date(v-model='proxyDate' mask="DD/MM/YYYY")
                .row.items-center.justify-end.q-gutter-sm
                    q-btn(:label="$t('btn.cancel')" color="primary" flat v-close-popup)
                    q-btn(:label="$t('btn.validate')" color="primary" flat @click="save('date')" v-close-popup)

        q-icon.cursor-pointer(name='access_time')
            q-popup-proxy(@before-show="updateProxy()" cover='' transition-show='scale' transition-hide='scale')
                q-time(v-model='proxyTime' mask='HH:mm' format24h='')
                    .row.items-center.justify-end.q-gutter-sm
                        q-btn(:label="$t('btn.cancel')" color="primary" flat v-close-popup)
                        q-btn(:label="$t('btn.validate')" color="primary" flat @click="save('time')" v-close-popup)
      
</template>
<script setup lang="ts">
import {ref, computed} from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const dateIni = new Date()
const timeIni = `${(dateIni.getHours() < 10 ? '0' : '')}${dateIni.getHours()}:${(dateIni.getMinutes() < 10 ? '0' : '')}${dateIni.getMinutes()}` 
const nowIni = dateIni.toLocaleDateString('en-GB')

const emit = defineEmits(['update:modelValue'])

const year = ref('')
const date = ref(props.modelValue.split(' ')[0])
const time = ref(props.modelValue.split(' ')[1])
    
const proxyDate = ref(date.value)
const proxyTime = ref(time.value)

const dt = computed(() => {
        const y = year.value != undefined && year.value != '' ? year.value : date.value.split('/')[2]
        const d = `${date.value.split('/')[0]}/${date.value.split('/')[1]}/${y}`
        return d + ' '+ time.value
    })

const inputValue = (event: any) => {
    date.value = event.split(' ')[0]
    time.value = event.split(' ')[1]
    emit('update:modelValue', event)
}

const updateProxy = () => {
    proxyDate.value = props.modelValue.split(' ')[0] != '' && props.modelValue.split(' ')[0] != undefined ? props.modelValue.split(' ')[0] : nowIni
    proxyTime.value = props.modelValue.split(' ')[1] != '' && props.modelValue.split(' ')[1] != undefined ? props.modelValue.split(' ')[1] : timeIni
}

const save = (type: string) => {
    if(type == 'date'){
        date.value = proxyDate.value
        time.value = props.modelValue.split(' ')[1] != '' && props.modelValue.split(' ')[1] != undefined ? props.modelValue.split(' ')[1] : timeIni
    }else{
        date.value = proxyDate.value != undefined && proxyDate.value != '' ? proxyDate.value : nowIni
        time.value = proxyTime.value
    }
    emit('update:modelValue', dt.value)
}

const navigation = (event: any) => {
        year.value = event.year
    }
</script>