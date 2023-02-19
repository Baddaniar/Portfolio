import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router.js'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')