/**
 * 1. 导入vue和vuex
 * 2. 安装vuex插件
 * 3. 创建stroe实例
 */
import Vue from "vue";
import Vuex from "vuex";
import search from "./modules/search";

Vue.use(Vuex);

const store = new Vuex.Store({
  // 模块
  modules: {
    search,
  },
});

export default store;
