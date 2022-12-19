<template>
  <el-scrollbar max-height="100vh">
    <rm-menu :data="data" :defaultActive="$route.path" background-color="#545c64" active-text-color="#ffd04b" text-color="#fff"
      :collapse="collapse" router></rm-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
const props = defineProps<{
  collapse: boolean
}>()
const data = [
  {
    name: "图标选择组件",
    index: "/",
    icon: "location",
  },
  {
    name: "地址区域组件",
    index: "/selectArea",
    icon: "document",
  },
  {
    name: "表单组件",
    index: "/form",
    icon: "Tickets",
  },
  {
    name: "模态框表单组件",
    index: "/modelform",
    icon: "Folder",
  },
  {
    name: "趋势组件",
    index: "/trend",
    icon: "Sort",
  },
  {
    name: "通知组件",
    index: "/notification",
    icon: "Bell",
  },
  {
    name: "菜单组件",
    index: "/menu",
    icon: "Folder",
  },
  {
    name: "表格组件",
    index: "/table",
    icon: "Grid",
  },
  {
    name: "进度条组件",
    index: "/progress",
    icon: "Loading",
  },
  {
    name: "时间组件",
    index: "/selectTime",
    icon: "Clock",
  },
  {
    name: "城市选择组件",
    index: "/selectCity",
    icon: "OfficeBuilding",
  },
  {
    name: "日历组件",
    index: "/calendar",
    icon: "Calendar",
  },
];
</script>

<style lang="scss" scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
</style>