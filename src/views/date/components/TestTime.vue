<template lang="pug">
.q-pa-md
    .q-gutter-sm.row.items-center
        q-input(v-model="time" mask="time" :rules="['time']")
            template(v-slot:append)
                q-icon.cursor-pointer(name="access_time")
                    q-popup-proxy(cover persistent transition-show="scale" transition-hide="scale")
                        q-time(v-model="time" ref="dNow" :now-btn="true" format24h="")
                            .row.items-center.justify-end
                                q-btn(v-close-popup :label="$t('notifications.cancel')" color="primary" flat)
                                q-btn(v-close-popup :label="$t('sub_components.changePassword.validate')"
                                :disable="computeDisableValBtn" color="primary" flat @click="validateTime()")

       
        slot(name="header")
            #test1 child header
        slot(name="footer")
            #test2 child footer
</template>
<script ts lang="ts">

</script>
<style lang="scss">
    
</style>