<template lang="pug">
.q-pa-md 
    .text-h1 Search
    InputSearch(
        v-model="model" 
        title="Auto completion" 
        :items="articles" 
        style='width: 500px')

    .q-pa-md 
    .text-h1 {{ model.label }}
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import useAxios from '../composables/axios'
import InputSearch from './components/InputSearch.vue';

interface Item {
    id: number
    label: string
}

const { get } = useAxios()

const model = ref<string>('')
// const articles = ref(["primary", "secondary", "accent", "dark", "positive", "negative", "info", "warning"])
const articles = ref([])

onMounted(() => {
    getArticle()
})

const getArticle = async () => {
    const res = await get('https://jorazdev.com/api/article/all')
    // articles.value = res.data.map((article: any) => ({id: article.id, label: article.label}))
    const arts: string[] = res.data.map((article: any) => article.label)
    articles.value = arts
    //console.log( articles.value)
}
</script>
