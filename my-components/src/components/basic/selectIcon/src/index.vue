<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <el-dialog v-model="dialogVisible" :title="title">
    <el-scrollbar height="400px">
      <div class="container">
        <div class="item" @click="clickIcon(item)" v-for="(item, index) in Object.keys(ElIcons)" :key="index">
          <div class="icon">
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div class="text">{{ item }}</div>
        </div>
      </div>
    </el-scrollbar>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, onMounted, watch, ref } from 'vue'
import * as ElIcons from '@element-plus/icons-vue'
import { toLine } from '@/utils';
import { useCopy } from '@/hooks/useCopy'

const props = defineProps<{
  // 弹出框的标题
  title: string,
  // 控制弹出框的显示与隐藏
  visible: boolean
}>()
onMounted(() => {
  // console.log(props.visible);
})
const emits = defineEmits(['update:visible'])
// 拷贝一份父组件传递过来的visible (v-model传到内部之后值有可能会被修改)
// 方法一: 解决props值(在子组件内只读,子组件不可以直接修改)不能直接绑定到v-model上的报错问题
let dialogVisible = ref<boolean>(props.visible)
const handleClick = () => {
  emits('update:visible', !props.visible)
}
const clickIcon = (item: string) => {
  const text = `<el-icon-${toLine(item)} />`
  useCopy(text)
  dialogVisible.value = false
}
// 监听visible的变化
// watch(() => props.visible, val => {
//   dialogVisible.value = val
//   emits('update:visible', val)
// })

// 监听visible的变化 只能监听第一次的变化
watch(() => props.visible, val => {
  dialogVisible.value = val
})
// 监听组件内部的dialogVisible变化
watch(() => dialogVisible.value, val => {
  emits('update:visible', val)
})

// 方法二: 解决props值(在子组件内只读,子组件不可以直接修改)不能直接绑定到v-model上的报错问题
const computedVisible = computed({
  get: () => props.visible,
  set: (value) => {
    emits('update:visible', value)
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .item {
    width: 25%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    margin-bottom: 20px;

    .icon {
      font-size: 14px;

      svg {
        height: 2em;
        width: 2em;
      }
    }

    .text {
      flex: 1;
    }
  }
}
</style>

/**
<!-- <script lang='ts' setup>
interface Props {
  either: '必传且限定'|'其中一个'|'值', // 利用TS：限定父组件传 either 的值
  child: string|number,
  sda?: string, // 未设置默认值，为 undefined
  strData: string,
  msg?: string
  labels?: string[],
  obj?:{a:number}
}
const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two'],
  obj: () => { return {a:2} }
})
</script> -->

*/