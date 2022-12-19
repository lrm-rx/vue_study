<template>
  <div class="rm-trend">
    <div class="text" :style="{ color: textColor }">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <!-- <el-icon-arrowup :style="{ color: !reverseColor ? upIconColor : '#52c41a', fontSize: `${iconSize}em` }" v-if="type === 'up'"></el-icon-arrowup>
      <el-icon-arrowdown :style="{ color: !reverseColor ? downIconColor : '#f5222d', fontSize: `${iconSize}em` }" v-else></el-icon-arrowdown> -->
      <component :is="`el-icon-${toLine(upIcon)}`" :style="{ color: !reverseColor ? upIconColor : '#52c41a', fontSize: `${iconSize}em` }" v-if="type === 'up'"></component>
      <component :is="`el-icon-${toLine(downIcon)}`" :style="{ color: !reverseColor ? downIconColor : '#f5222d', fontSize: `${iconSize}em` }" v-else></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots, computed } from 'vue'
import {toLine} from '@/utils'
const props = defineProps({
  // 上升趋势显示的图标
  upIcon: {
    type: String,
    default: 'ArrowUp'
  },
  // 下降趋势显示的图标
  downIcon: {
    type: String,
    default: 'ArrowDown'
  },
  // 标记当前趋势是上升(up)还是下降(down)
  type: {
    type: String,
    default: 'up'
  },
  // 趋势显示的文字 1. 可以是父组件传递过来的数据 2. 插槽
  text: {
    type: String,
    default: '趋势'
  },
  // 上升趋势图标颜色
  upIconColor: {
    type: String,
    default: '#f5222d'
  },
  // 下降趋势图标颜色
  downIconColor: {
    type: String,
    default: '#52c41a'
  },
  // 图标大小
  iconSize: {
    type: [Number, String],
    default: 0.8
  },
  // 字体颜色
  // textColor: {
  //   type: String,
  //   default: ''
  // },
  // 颜色反转只在默认的颜色下生效, 如果使用了自定义颜色则不起作用
  reverseColor: {
    type: Boolean,
    default: false
  },
  // 上升趋势字体颜色
  upTextColor: {
    type: String,
    default: 'rgb(0,0,0)'
  },
  // 下降趋势字体颜色
  downTextColor: {
    type: String,
    default: 'rgb(0,0,0)'
  },
})
// 获取插槽
const slots = useSlots()

// 文字颜色
const textColor = computed(() => {
  return props.type === 'up' ? props.upTextColor : props.downTextColor
})

</script>

<style lang="scss" scoped>
.rm-trend {
  display: flex;
  align-items: center;

  .text {
    font-size: 12px;
    margin-right: 4px;
  }

  .icon {
    svg {
      width: 0.8em;
      height: 0.8em;
    }
  }
}
</style>