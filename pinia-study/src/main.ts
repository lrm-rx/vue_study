/*
 * @Author: lrm
 * @Date: 2022-11-01 22:04:17
 * @LastEditors: lrm
 * @LastEditTime: 2022-11-02 15:04:12
 * @FilePath: \pinia-study\src\main.ts
 */
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

// 创建Pinia实例
const pinia = createPinia()
// const app = createApp(App)

// // 挂载到Vue根实例
// app.use(pinia)

// app.mount('#app')

createApp(App).use(pinia).mount('#app')
