import { App } from 'vue'
import RmMenu from './src/index.vue'
import InfiniteMenu from './src/menu'

// 让组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component('rm-menu', RmMenu)
    app.component('rm-infinite-menu', InfiniteMenu)
  }
}