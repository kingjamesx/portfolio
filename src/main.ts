import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
const pinia = createPinia()
import './assets/styles/main.scss'
const app = createApp(App)
app.use(pinia)
app.mount('#app')
