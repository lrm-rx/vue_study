<template>
  <el-container>
    <el-aside width="auto" class="rm-el-aside">
      <nav-side :collapse="isCollapse"></nav-side>
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="isCollapse"></nav-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavSide from "./navSide/index.vue";
import NavHeader from "./navHeader/index.vue";

const isCollapse = ref(false)
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
.rm-el-aside {
  background-color: #545c64;
  height: 100%;
}
</style>