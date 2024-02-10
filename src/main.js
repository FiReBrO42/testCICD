
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import axios from 'axios'
import VueAxios from 'vue-axios'

// 引入 Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// 可選：引入 Bootstrap JavaScript
import 'bootstrap'
// 匯入bootstrap
import './assets/all.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)

app.mount('#app')
