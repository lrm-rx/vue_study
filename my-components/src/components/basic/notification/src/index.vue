<template>
  <el-popover popper-class="rm-el-popper-padding0" placement="bottom" :width="300" trigger="click">
    <template #default>
      <slot></slot>
    </template>
    <template #reference>
      <el-badge class="rm-badge-cursor" :value="value" :max="max" :is-dot="isDot">
        <component :is="`el-icon-${toLine(icon)}`"></component>
      </el-badge>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
import { toLine } from '@/utils';
const props = defineProps({
  // 显示的图标
  icon: {
    type: String,
    default: 'Bell'
  },
  // 通过数量
  value: {
    type: [String, Number],
    default: ''
  },
  // 最大值
  max: {
    type: Number
  },
  // 是否显示圆点
  isDot: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.rm-badge-cursor {
  cursor: pointer;
}
svg {
  width: 1em;
  height: 1em;
}
</style>