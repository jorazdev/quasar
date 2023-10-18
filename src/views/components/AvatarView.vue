<template lang="pug">
.row.justify-center.q-mt-md(v-for="n in 5" :key="n")
    .row.justify-center.items-center.q-mx-md
        q-avatar.q-mx-xs(color="primary" size="28px" text-color="white") 50
        span Emails
    q-avatar(color="secondary" size="28px" text-color="white") 
        img(src='https://cdn.quasar.dev/img/boy-avatar.png')


.row.justify-center.q-mt-md.q-gutter-sm(v-for="n in 5" :key="n")
    q-btn(round color="secondary" v-for="n in 5" :key="n")
        q-avatar(size="28")
            img(src="https://cdn.quasar.dev/logo-v2/svg/logo.svg")

.q-mt-xl
    q-item.q-mt-xs(clickable v-ripple v-for="n in 5" :key="n")
        q-item-section(side)
            q-avatar(rounded size="48px")
                img(src="https://cdn.quasar.dev/img/avatar.png")
                q-badge(floating color="teal") new
        q-item-section
            q-item-label Mary
            q-item-label(caption) 2 new messages
        q-item-section(side)
            span 3 min ago

.q-mt-md.q-gutter-sm
    q-avatar(
        v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']"
        :key="size"
        :size="size"
        color="primary"
        text-color="white"
        icon="directions"
    )
</template>
<script setup lang="ts">
import {ref} from 'vue'

const size = ref('md')
</script>
<style lang="scss">
    
</style>