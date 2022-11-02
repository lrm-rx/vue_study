# vue的学习记录

## Pinia
### Pina的优势
Pina是一个全新的Vue状态管理库, 它允许您跨组件/页面共享状态。
+ dev-tools支持
  - 跟踪动作、突变的时间线
  - Store 出现在使用它们的组件中
  - time travel 和 更容易的调试
+ 热模块更换
  - 在不重新加载页面的情况下修改您的 Store
  - 在开发时保持任何现有状态
+ 插件:使用插件扩展Pinia功能
+ 为JS用户提供适当的TypeScript 支持
+ 服务器端渲染支持
+ Vue2 和 Vue3 都能支持,代码简洁
+ 抛弃传统的 `Mutation` ，只有 `state`, `getter` 和 `action` ，简化状态管理库

### Pinia的基本使用
#### 初始化项目: npm init vite@latest
#### 安装: npm i pinia

#### 引入
在`src/main.ts`引入

```javacript
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

// 创建Pinia实例
const pinia = createPinia()

/**
 * const app = createApp(App)
 * // 挂载到Vue根实例
 * app.use(pinia)
 * app.mount('#app')
 */

// 链式调用
createApp(App).use(pinia).mount('#app')
```

#### 创建Store
在`src/store/index.ts`创建,并创建`PiniaWorld.ts`文件,注意:**使用传统的解构赋值无法实现响应式, 必须使用 `storeToRefs`**

```javascript
// src/store/index.ts
import {useMainStroe} from "./PiniaWorld";
import {useCartStore} from "./cart"

export default function useStore() {
  return {
    mainStroe: useMainStroe(), // Pinia模块化
  };
}
```

```javascript
// src/store/PiniaWorld.ts
import { defineStore } from 'pinia'
// 1. 定义容器
/**
 * 参数1: 容器的 ID, 必须是唯一的, Pinia会把所有的容器挂载到根容器
 * 参数2: 选项对象
 * 返回值: 一个函数, 调用得到容器实例
 */
export const useMainStroe = defineStore('main', {
  /**
 * 类似于组件的 data, 用来存储全局状态的
 * 1. 必须是函数:为了在服务端渲染的时候避免交叉请求导致的数据状态污染
 * 2.必须是箭头函数, 这是为了更好的 TS 类型推导
 */
  state: () => {
    return {
      count: 100,
      msg: 'bar'
    }
  },

  // 类似于组件的 computed , 用来封装计算属性, 有缓存的功能
  getters: {
    // countMore(state){
    //   console.log('count10 调用了');
    //   return state.count + 10;
    // }

    // 如果在 getters 中使用了 this 则必须手动指定返回值的类型,否则 TS 推导不出来
    countMore(): number{
      console.log('count10 调用了');
      return this.count + 10;
    }
  },

  // 类似于组件的 methods, 封装业务逻辑, 修改 state
  actions: {
    changeState(num: number){
      this.count+=num
      this.msg = this.msg === "bar"?"lrm":"bar"

      // this.$patch({})
      // this.$patch(()=>{})
    }
  }
})
// 2.使用容器中的state

// 3.修改state

// 4.容器中的action 的使用
```

#### 使用Store

```javascript
<template>
  <p>count: {{   count   }}</p>
  <p>msg: {{   msg   }}</p>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
// 从状态层导出指定模块
import useStore from "../store";
const { mainStroe } = useStore();
// 使用传统的解构赋值无法实现响应式, 必须使用 storeToRefs
// const { msg } = useMainStroe();
const { count, msg } = storeToRefs(mainStroe);

</script>

```

#### Pinia修改数据状态
+ 修改数据状态
  - 简单数据修改
  简单数据直接通过在方法中操作 `store.属性名` 来修改
    ```javascript
    <template>
      <p>count: {{   count   }}</p>
      <p>msg: {{   msg   }}</p>
    </template>

    <script lang="ts" setup>
    import { storeToRefs } from 'pinia';
    // 从状态层导出指定模块
    import useStore from "../store";
    const { mainStroe } = useStore();
    // 使用传统的解构赋值无法实现响应式, 必须使用 storeToRefs
    // const { msg } = useMainStroe();
    const { count, msg } = storeToRefs(mainStroe);
    // 修改数据(单个修改)
    const handleChangeCount = ()=> {
      mainStroe.count++
    }
    const handleChangemsg = ()=> {
      mainStroe.msg = mainStroe.msg === "bar"?"lrm":"bar"
    }
    </script>
    ```
  - 多条数据修改
  1. $patch + 对象
  2. $patch + 函数
   ```javascript
  // 通过 $patch + 对象
  const handleChangeDataByObj = () => {
    mainStroe.$patch({
      count: mainStroe.count + 2,
      msg: mainStroe.msg === "bar"?"lrm":"bar"
    })
  }
  // 通过$pathc + 函数
  const handleChangeDataByFun = () => {
    mainStroe.$patch(state=>{
      state.count = state.count + 5,
      state.msg = state.msg === "bar"?"lrm":"bar"
    })
  }
   ```
   3. 通过 action 修改数据
  - 在store的`actions`中定义方法
  ```javascript
  actions: {
    changeState(num: number){
      this.count+=num
      this.msg = this.msg === "bar"?"lrm":"bar"
    }
  }
  ```
  - 在组件中调用`store.方法名`
  ```javascript
  const handleChangeByAction = () => {
    mainStroe.changeState(10)
  }
  ```
#### Pinia中的Getters
使用方法和vuex一样

#### 总结
Pinia 就是 Vuex 的替代版，可以更好的兼容 Vue2，Vue3以及TypeScript。在Vuex的基础上去掉了 Mutation，只保留了 state, getter和action。Pinia拥有更简洁的语法， 扁平化的代码编排，符合Vue3 的 Composition api


