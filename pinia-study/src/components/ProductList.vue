<!--
 * @Author: lrm
 * @Date: 2022-11-02 14:54:04
 * @LastEditors: lrm
 * @LastEditTime: 2022-11-02 17:07:37
 * @FilePath: \pinia-study\src\components\ProductList.vue
-->
<template>
  <ul v-for="item in allProducts" :key="item.id">
    <li>
      {{item.title}} - {{item.price}}
      <br>
      <button :disabled="!item.inventory" @click="cartProducts.addProductToCart(item)">添加到购物车</button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
// 从状态层导出指定模块
import useStore from "../store";
const { products, cartProducts } = useStore();

// 获取所有商品
products.getAllProducts()
const { allProducts } = storeToRefs(products)

</script>