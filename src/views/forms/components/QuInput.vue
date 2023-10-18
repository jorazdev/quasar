<template lang="pug">
.q-pa-md
  .q-gutter-y-md.column(style='max-width: 300px')
    q-input(color='purple-12' v-model='text' label='Label')
      template(v-slot:prepend='')
        q-icon(name='event')
    q-input(color='teal' filled='' v-model='text' label='Label')
      template(v-slot:prepend='')
        q-icon(name='event')
    q-input(color='grey-3' label-color='orange' outlined='' v-model='text' label='Label')
      template(v-slot:append='')
        q-icon(name='event' color='orange')
    q-input(color='lime-11' bg-color='green' filled='' v-model='text' label='Label')
      template(v-slot:prepend='')
        q-icon(name='event')
    q-input(color='teal' outlined='' v-model='text' label='Label')
      template(v-slot:append='')
        q-avatar
          img(src='https://cdn.quasar.dev/logo-v2/svg/logo.svg')
    q-input(color='orange' standout='' bottom-slots='' v-model='text' label='Label' counter='' clearable='')
      template(v-slot:prepend='')
        q-icon(name='place')
      template(v-slot:append='')
        q-icon(name='favorite')
      template(v-slot:hint='')
        | Field hint
</template>
<script setup lang="ts">

</script>
<style lang="scss">
    
</style>