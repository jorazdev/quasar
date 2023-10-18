<template lang="pug">
q-drawer(
    v-if="leftDrawerOpen"
    show-if-above
    bordered
    class="bg-grey-2"
)
    q-list
        q-item-label(header) Essential Links
        DrawerItems
</template>
<script setup lang="ts">

import DrawerItems from '../header/DrawerItems.vue'

defineProps({
    leftDrawerOpen: {
        type: Boolean,
        default: false
    }
})

</script>
<style lang="scss">
    
</style>