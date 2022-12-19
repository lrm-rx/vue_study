<template>
  <el-menu class="el-menu-vertical" :default-active="defaultActive" :router="router" v-bind="$attrs">
    <template v-for="(item, i) in data" :key="i">
      <!-- 一级菜单 -->
      <el-menu-item v-if="!item[children] || !item[children].length" :index="item[index]">
        <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
        <span>{{ item[name] }}</span>
      </el-menu-item>
      <!-- 二级菜单 -->
      <el-sub-menu v-if="item[children] && item[children].length" :index="item[index]">
        <template #title>
          <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
          <span>{{ item[name] }}</span>
        </template>
        <el-menu-item v-for="(subItem, k) in item[children]" :key="k" :index="subItem.index">
          <component v-if="subItem[icon]" :is="`el-icon-${toLine(subItem[icon])}`"></component>
          <span>{{ subItem[name] }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import './menu.scss'
import { toLine } from '@/utils'

const props = defineProps({
  // 菜单数据
  data: {
    type: Array as PropType<any[]>,
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
  },
  // 匹配后端的字段， 在不知道组件将会使用什么字段名的情况，可以使用组件的时候再传值
  // 例如： <rm-menu name='a', icon='b',children='c'></rm-menu>
  // 菜单标题的键名
  name: {
    type: String,
    default: 'name'
  },
  // 菜单标识的键名
  index: {
    type: String,
    default: 'index'
  },
  // 菜单图标的键名
  icon: {
    type: String,
    default: 'icon'
  },
  // 菜单子菜单的键名
  children: {
    type: String,
    default: 'children'
  },
})
</script>

<style lang="scss" scoped>
svg {
  margin-right: 6px;
  width: 1em;
  height: 1em;
}
</style>