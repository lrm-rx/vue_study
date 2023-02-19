<template>
  <div id="app">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/add" icon="plus">发布</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Button, Tabbar, TabbarItem } from "vant"

export default {
  name: "App",
  components: {
    // Button.name --> van-button
    [Button.name]: Button,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>

<style></style>
