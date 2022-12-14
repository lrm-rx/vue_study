import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { toLine } from './utils/index';
import rmUI from './components/basic';
import './mock';


const app = createApp(App)
// el-icon-xxx
for (const i in ElementPlusIconsVue) {
  if (Object.prototype.hasOwnProperty.call(ElementPlusIconsVue, i)) {
    // 注册全部组件
    app.component(`el-icon-${toLine(i)}`, (ElementPlusIconsVue as any)[i])
  }
}

app
  .use(router)
  .use(ElementPlus)
  .use(rmUI)
  .mount('#app')
