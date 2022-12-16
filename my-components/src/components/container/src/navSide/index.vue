<template>
  <el-menu :collapse="collapse" default-active="2" class="el-menu-vertical">
    <el-menu-item index="1">
      <el-icon>
        <el-icon-menu />
      </el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <el-icon-menu />
      </el-icon>
      <span>导航2</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon>
        <el-icon-menu />
      </el-icon>
      <span>导航3</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
const props = defineProps<{
  collapse: boolean
}>()
</script>

<style lang="scss" scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
</style>