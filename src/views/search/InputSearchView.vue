<template lang="pug">

.text-h1 Search

.q-pa-md.row.q-gutter-md
    InputSearch.col(
        v-model="model" 
        title="Auto completion" 
        :items="articles" 
        @getItem="getItem")
    q-btn(color="primary" label="Envoyer" @click="send")

.q-pa-md.row.q-gutter-md
    .text-h2 {{ resFilter }}

.q-pa-md.row.q-gutter-md
    QuSearch(
        v-model="mod" 
        :items="arts" 
        label="Auto completion")
    q-btn(color="primary" label="Envoyer") 

</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import useAxios from '../composables/axios'
import InputSearch from './components/InputSearch.vue';
import QuSearch from './components/QuSearch.vue';

interface Item {
    id: number
    label: string
}

const { get } = useAxios()

const model = ref<string>('')
const mod = ref<string>('')
const arts = ref(["primary", "secondary", "accent", "dark", "positive", "negative", "info", "warning"])
const articles = ref([])
const resFilter = ref()

onMounted(() => {
    getArticle()
})

const getArticle = async () => {
    // const res = await get('https://jorazdev.com/api/article/all')
    const res = await get('data/data.json')
    articles.value = res.data.map((article: any) => ({id: article.id, label: article.label}))
    // articles.value = res.data.map((article: any) => article.label)
}

const getItem = (val: any) => {
    resFilter.value = val
}


</script>
