import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import UsersPage from './pages/UsersPage.vue'
import router from './router'

const app = createApp(UsersPage)

app.use(createPinia())
app.use(router)

app.mount('#app')
