<template lang="pug">
.q-pa-md(style='max-width: 300px')
    q-expansion-item(v-model="expanded" :icon="icon" :label="title")
        .q-px-md
            .q-gutter-sm
                q-checkbox(
                    v-for="item in lists" 
                    v-model="model" 
                    :val="item.label" 
                    :label="item.label" 
                    :color="item.color"
                    )
        
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

interface Item {
    id: number
    label: string
    color: string
}

interface Props {
    modelValue: string[]
    title: string
    icon: string
    items: Item[]
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: () => [],
    title: '',
    icon: 'perm_identity',
    items: () => []
})

const emit = defineEmits(['update:modelValue'])

const expanded = ref<Boolean>(false)
const lists = ref<any>([])

onMounted(() => {
    lists.value = props.items.map((item, index) => ({id: index, label: item, color: color()}))
})

const model = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
})

const color = () => {
    const colors = ["primary", "secondary", "accent", "dark", "positive", "negative", "info", "warning"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

</script>
