import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

const appR = createApp(App)
appR.use(store)
appR.use(axios)
appR.mount('#app')
