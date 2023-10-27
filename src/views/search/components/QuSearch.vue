<template lang="pug">
q-select(
    v-model='model' 
    use-input='' 
    fill-input=''
    hide-selected=''  
    input-debounce='0' 
    :options='options' 
    @filter='filterFn' 
    :label="title")
  template(v-slot:no-option='')
    q-item
      q-item-section.text-grey
        | No results
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';


interface Props {
    modelValue: string
    items: string[]
    title: string
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
    items: () => [],
    title: ''
})

const emit = defineEmits(['update:modelValue'])

const options = ref(props.items)

const model = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
})

const filterFn = (val: string, update: any, abort: any) => {
    update(() => {
        const needle = val.toLowerCase()
        options.value = props.items.filter(v => v.toLowerCase().indexOf(needle) > -1)
    })
}
</script>