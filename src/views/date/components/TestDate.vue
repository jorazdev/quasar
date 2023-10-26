<template lang="pug">
.q-pa-md(style='max-width: 300px')
    q-input(v-model="model" @update:model-value="inputValue($event)" :disable="props.disabled")
      template(v-slot:append='')
        q-icon(name="error" color="negative" v-if="!isDatetime")
        q-icon.cursor-pointer(name='event')
            q-popup-proxy(@before-show="updateDate()" cover='' transition-show='scale' transition-hide='scale')
                q-date(v-model='date' mask="MM/DD/YYYY HH:mm" :locale="locale")
                    .row.items-center.justify-end.q-gutter-sm
                        q-btn(:label="$t('btn.cancel')" color="primary" flat v-close-popup)
                        q-btn(:label="$t('btn.validate')" color="primary" flat @click="save()" v-close-popup)

        q-icon.cursor-pointer(name='access_time' v-if="props.withTime")
            q-popup-proxy(@before-show="updateDate()" cover='' transition-show='scale' transition-hide='scale')
                q-time(v-model='date' mask='MM/DD/YYYY HH:mm' format24h='')
                    .row.items-center.justify-end.q-gutter-sm
                        q-btn(:label="$t('btn.cancel')" color="primary" flat v-close-popup)
                        q-btn(:label="$t('btn.validate')" color="primary" flat @click="save()" v-close-popup)
      
</template>
<script setup lang="ts">
import {ref, computed} from 'vue'
import { useI18n } from 'vue-i18n'
import { loadLocalMessages, i18nOption } from '../../../i18n'
//import { date } from 'quasar'

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

const date = ref('')
const isDatetime = ref(false)
const locale = ref({
    daysShort: t('locale.daysShort').split('_'),
    monthsShort: t('locale.monthsShort').split('_'),
})

const model = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
})

const save = () => {
    verifDatetime(model.value)
    model.value = date.value
}

const updateDate = () => {
    date.value = model.value
}

const inputValue = (event: string) => {
    verifDatetime(event)
}

const verifDatetime = (value: string) => {
    //const dateTimeRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4} (0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;
    const dateTimeRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4} (0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;

    if (dateTimeRegex.test(value)) {
        console.log("Valid date and time format");
        isDatetime.value = true
    } else {
        console.log("Invalid date and time format");
        isDatetime.value = false
    }
}
</script>