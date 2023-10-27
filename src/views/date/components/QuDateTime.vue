<template lang="pug">
q-input.q-pa-md(v-model="model" :rules="rules" clearable :disable="props.disabled")
    template(v-slot:append='')
        q-icon.cursor-pointer(name='event')
            q-popup-proxy(@before-show="updateDate()" cover='' transition-show='scale' transition-hide='scale')
                q-date(v-model='date' :mask="withTime ? t('datetime.mask') : t('date.mask')" :locale="locale")
                    .row.items-center.justify-end.q-gutter-sm
                        q-btn(:label="$t('btn.cancel')" color="primary" flat v-close-popup)
                        q-btn(:label="$t('btn.validate')" :disable="!date" color="primary" flat @click="save()" v-close-popup)

        q-icon.cursor-pointer(name='access_time' v-if="props.withTime")
            q-popup-proxy(@before-show="updateDate()" cover='' transition-show='scale' transition-hide='scale')
                q-time(v-model='date' :mask="t('datetime.mask')" now-btn format24h='')
                    .row.items-center.justify-end.q-gutter-sm
                        q-btn(:label="$t('btn.cancel')" color="primary" flat v-close-popup)
                        q-btn(:label="$t('btn.validate')" :disable="!date" color="primary" flat @click="save()" v-close-popup)  
</template>
    <script setup lang="ts">
    import {ref, computed} from 'vue'
    import { useI18n } from 'vue-i18n'
    import { loadLocalMessages, i18nOption } from '../../../i18n'
    //import { date } from 'quasar'
    
    interface Props {
        modelValue: string
        disabled: boolean
        withTime: boolean
    }
    const props = withDefaults(defineProps<Props>(), {
        modelValue: '',
        disabled: false,
        withTime: true
    })
    
    const emit = defineEmits(['update:modelValue'])
    
    const {d, t} = useI18n()
    const regex = new RegExp(props.withTime ? t('datetime.regex') : t('date.regex'));
    
    const date = ref('')
    const locale = ref({
        daysShort: t('locale.daysShort').split('_'),
        monthsShort: t('locale.monthsShort').split('_'),
    })
    
    const model = computed({
        get: () => props.modelValue,
        set: (value) => emit('update:modelValue', value)
    })
    
    const rules = computed(() => [(val:any) => regex.test(val)])
    
    const save = () => {
        model.value = date.value
    }
    
    const updateDate = () => {
        date.value = model.value
    }
    
    </script>