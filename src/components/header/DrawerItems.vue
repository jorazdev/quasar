<template lang="pug">
q-item(
    v-for="(item, index) in items"
    :key="index"
    clickable 
    tag="a" 
    target="_blank" 
    :href="item.href"
    )
    q-item-section(avatar)
        q-icon(:name="item.icon")

    q-item-section
        q-item-label {{ item.label }}
        q-item-label(caption) {{ item.caption }}
</template>
<script setup lang="ts">
import useHeader from '@/compositions/header';

const { items } = useHeader()
</script>
