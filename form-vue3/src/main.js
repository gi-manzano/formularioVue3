import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

createApp(App).use(store).use(axios).mount('#app')
