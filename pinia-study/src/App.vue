<!--
 * @Author: lrm
 * @Date: 2022-11-01 22:04:17
 * @LastEditors: lrm
 * @LastEditTime: 2022-11-02 17:52:37
 * @FilePath: \vue-study\pinia-study\src\App.vue
-->

<template>
  <PiniaWorld/>
  <h1>Pinia - 购物车示例</h1>
  <hr>
  <h2>商品列表</h2>
  <ProductList/>
  <hr>
  <ShoppingCart/>
</template>
<script setup lang="ts">
import PiniaWorld from './components/PiniaWorld.vue'
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';
</script>

<style scoped>
</style>
