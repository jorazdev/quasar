<template lang="pug">
.q-pa-md(style='max-width: 300px')
    q-input(:model-value="model" :disable="props.disabled")
      template(v-slot:append='')
        q-icon.cursor-pointer(name='event')
            q-popup-proxy(@before-show="updateProxy()" cover='' transition-show='scale' transition-hide='scale')
                q-date(v-model='proxyDate' mask="DD/MM/YYYY" :locale="locale" @navigation="navigation")
                    .row.items-center.justify-end.q-gutter-sm
                        q-btn(:label="$t('btn.cancel')" color="primary" flat v-close-popup)
                        q-btn(:label="$t('btn.validate')" color="primary" flat @click="save()" v-close-popup)

        q-icon.cursor-pointer(name='access_time' v-if="props.withTime")
            q-popup-proxy(@before-show="updateProxy()" cover='' transition-show='scale' transition-hide='scale')
                q-time(v-model='proxyTime' mask='HH:mm' format24h='')
                    .row.items-center.justify-end.q-gutter-sm
                        q-btn(:label="$t('btn.cancel')" color="primary" flat v-close-popup)
                        q-btn(:label="$t('btn.validate')" color="primary" flat @click="save()" v-close-popup)
      
</template>
<script setup lang="ts">
import {ref, computed} from 'vue'
import { useI18n } from 'vue-i18n'
import { loadLocalMessages, i18nOption } from '../../../i18n'

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    withTime: {
        type: Boolean,
        default: true
    }
})

const emit = defineEmits(['update:modelValue'])

const {d, t} = useI18n()
const dateIni = new Date()

const timeIni = `${(dateIni.getHours() < 10 ? '0' : '')}${dateIni.getHours()}:${(dateIni.getMinutes() < 10 ? '0' : '')}${dateIni.getMinutes()}` 
const nowIni = dateIni.toLocaleDateString('en-GB')

const year = ref('')
const proxyDate = ref('')
const proxyTime = ref('')
const locale = ref({
    daysShort: t('locale.daysShort').split('_'),
    monthsShort: t('locale.monthsShort').split('_'),
})

const model = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
})

const date = computed(() => {
    const [d, m, Y] = proxyDate.value.split('/')
    const y = year.value ? year.value : Y
    return `${d}/${m}/${y}`
})

const updateProxy = () => {
    const [d, t] = props.modelValue.split(' ')
    proxyDate.value = d != '' && d != undefined ? d : nowIni
    proxyTime.value = props.withTime ? (t != '' && t != undefined ? t : timeIni) : ''
}

const save = () => {
   model.value = `${date.value} ${proxyTime.value}`
}

const navigation = (event: any) => {
    year.value = event.year
}
</script>