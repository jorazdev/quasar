import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import i18n from './i18n'

const app = createApp(App).use(Quasar, quasarUserOptions)

app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
