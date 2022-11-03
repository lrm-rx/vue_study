<!--
 * @Author: lrm
 * @Date: 2022-11-01 22:04:17
 * @LastEditors: lrm
 * @LastEditTime: 2022-11-02 18:09:21
 * @FilePath: \vue-study\pinia-study\src\components\PiniaWorld.vue
-->
<template>
  <p>countMore: {{mainStroe.countMore}}</p>
  <p>countMore: {{mainStroe.countMore}}</p>
  <p>countMore: {{mainStroe.countMore}}</p>
  <p>countMore: {{mainStroe.countMore}}</p>
  <p>countMore: {{mainStroe.countMore}}</p>
  <hr>
  <p>count: {{   mainStroe.count   }}</p>
  <p>msg: {{   mainStroe.msg   }}</p>
  <p>count: {{   count   }}</p>
  <p>msg: {{   msg   }}</p>
  <p>
    <button @click="handleChangeCount">修改count数据</button>
    <button @click="handleChangemsg">修改msg文字</button>
  </p>
  <p>
    <button @click="handleChangeDataByObj">修改多个数据($patch + 对象)</button>
    <button @click="handleChangeDataByFun">修改多个数据($patch + 函数)</button>
  </p>
  <p>
    <button @click="handleChangeByAction">通过action修改</button>
  </p>
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

// 批量修改数据 使用$patch --- $patch内部有做优化
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

// 通过 action 修改数据
const handleChangeByAction = () => {
  mainStroe.changeState(10)
}
</script>