<template lang="pug">
q-input.q-pa-md(v-model="model")
    template(v-slot:append='')
      q-icon.cursor-pointer(name='event')
        q-popup-proxy(cover='' transition-show='scale' transition-hide='scale')
          q-date(v-model="model" mask='DD/MM/YYYY HH:mm')
            .row.items-center.justify-end.q-gutter-sm
                q-btn(:label="$t('btn.cancel')" color="primary" flat v-close-popup)
                q-btn(:label="$t('btn.validate')" color="primary" flat @click="save()" v-close-popup)
                
      q-icon.cursor-pointer(name='access_time')
        q-popup-proxy(cover='' transition-show='scale' transition-hide='scale')
          q-time(v-model="model" mask='DD/MM/YYYY HH:mm' format24h='')
            .row.items-center.justify-endq-gutter-sm
                q-btn(:label="$t('btn.cancel')" color="primary" flat v-close-popup)
                q-btn(:label="$t('btn.validate')" color="primary" flat @click="save()" v-close-popup)
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
    modelValue: string
    disabled: boolean
}
const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
    disabled: false
})

const model = computed({
    get: () => props.modelValue,
    set: (value: any) => emit('update:modelValue', value)
})

const emit = defineEmits(['update:modelValue'])

const save = () => {
    console.log(props.modelValue)
}

</script>
