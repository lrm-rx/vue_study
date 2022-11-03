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