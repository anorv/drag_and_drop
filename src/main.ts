import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import { i18n } from '@/core/services/translationService'
import { store } from '@/store/store'
import { BootstrapVue3 } from 'bootstrap-vue-3'

const app = createApp(App)
app.use(BootstrapVue3)
app.use(store)
app.use(i18n)
app.mount('#app')
