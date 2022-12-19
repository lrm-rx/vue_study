<template>
  <el-menu :default-active="defaultActive" :router="router" v-bind="$attrs">
    <template v-for="(item, index) in data" :key="index">
      <el-menu-item v-if="!item.children || !item.children.length" :key="index">
        <component v-if="item.icon" :is="`el-icon-${toLine(item.icon)}`"></component>
        <span>{{ item.name }}</span>
      </el-menu-item>
      <el-sub-menu v-if="item.children && item.children.length" :index="item.index">
        <template #title>
          <component v-if="item.icon" :is="`el-icon-${toLine(item.icon)}`"></component>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item v-for="(subItem, i) in item.children" :key="i" :index="subItem.index">
          <component v-if="subItem.icon" :is="`el-icon-${toLine(subItem.icon)}`"></component>
          <span>{{ subItem.name }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IMenuItem } from './types'
import { toLine } from '@/utils'

const props = defineProps({
  // 菜单数据
  data: {
    type: Array as PropType<IMenuItem[]>,
    required: true
  },
  // 默认选中的菜单
  defaultActive: {
    type: String,
    default: ''
  },
  // 是否是路由模式
  router: {
    type: Boolean,
    default: false
  }
})
console.log(props.data);
</script>

<style lang="scss" scoped>
svg {
  margin-right: 6px;
}
</style>