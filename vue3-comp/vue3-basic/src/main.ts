import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { userkey } from './keys'
const app = createApp(App)
app.config.globalProperties.msg = 'hello'
app.provide(userkey, { name: 'lucky' })
app.mount('#app')

createApp(App).mount('#app')
