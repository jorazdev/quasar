<template lang="pug">
q-select(
    v-model='model' 
    use-input='' 
    fill-input='' 
    hide-selected='' 
    input-debounce='0' 
    :label="title"
    :options='options' 
    @filter='filterFn' 
    @input-value="setModel")
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
    items: Item[]
}

const props = withDefaults(defineProps<Props>(), {
    title: '',
    items: () => []
})

const emit = defineEmits(['update:modelValue', 'getItem'])

const model = computed({
    get: () => props.modelValue,
    set: (value) => {
        if(typeof value === 'object'){
            emit('getItem', value)
        }
        emit('update:modelValue', value)
    }
})

const options = ref<Item[]>(props.items)

const filterFn = (val: string, update: any) => {
    update(() => {
        const needle = val.toLowerCase()
        options.value = props.items.filter(item => item.label.toLowerCase().indexOf(needle) > -1)
    })
}

const setModel = (val: any) => {
    model.value = val
}

</script>
