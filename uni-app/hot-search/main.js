import Vue from "vue";
import App from "./App";
import store from "./store";
import "./styles/global.scss";
// 文章详情样式
import "./styles/article-detail.scss";

// 导入过滤器
import * as filters from "./filters";

// 注册过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  ...App,
  store,
});
app.$mount();
