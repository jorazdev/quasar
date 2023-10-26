<template lang="pug">
q-select.q-pa-md.q-gutter-md.row(
    v-model='model' 
    use-input='' 
    input-debounce='0' 
    :label="title"
    :options='options' 
    @filter='filterFn')
    template(v-slot:no-option='')
        q-item
            q-item-section.text-grey
            | No results
</template>
<script setup lang="ts">
import { ref, computed, onMounted, toRaw } from 'vue'

interface Item {
    id: number
    label: string
}

interface Props {
    modelValue: string
    title: string
    items: string[]
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
    title: '',
    items: () => []
})

const emit = defineEmits(['update:modelValue'])

const model = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
})

//console.log(props.items)
const options = ref(props.items)

const filterFn = (val: string, update: any) => {
    //console.log(toRaw(props.items))
    //console.log(props.items)
    update(() => {
        const needle = val.toLowerCase()
        // options.value = props.items.filter(item => item.label.toLowerCase().indexOf(needle) > -1)
        options.value = toRaw(props.items).filter(v => v.toLowerCase().indexOf(needle) > -1)
    })
}

</script>
