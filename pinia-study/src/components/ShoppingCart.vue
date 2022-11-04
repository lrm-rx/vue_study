<template>
  <h2>你的购物车</h2>
  <p>
    <i>请添加一些商品到购物车</i>
  </p>
  <ul v-for="item in cartProducts.cartProducts" :key="item.id">
    <li>{{item.title}} - 单价:{{item.price}} -数量: {{item.quantity}}</li>
  </ul>
  <p>商品总价: {{cartProducts.totalPrice}}</p>
  <p>
    <button @click="cartProducts.checkout">结算</button>
  </p>
  <p v-show="cartProducts.checkoutStatus">结算{{cartProducts.checkoutStatus}}</p>
</template>

<script lang="ts" setup>
// 从状态层导出指定模块
import useStore from "../store";
const { cartProducts } = useStore();
</script>