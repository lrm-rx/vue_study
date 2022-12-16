<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <el-dialog
    v-model="dialogVisible"
    :title="title"
    width="30%"
  >
    11111
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, onMounted, watch, ref } from 'vue'
const props = defineProps<{
  // 弹出框的标题
  title: string,
  // 控制弹出框的显示与隐藏
  visible: boolean
}>()
onMounted(() => {
  console.log(props.visible);
}) 
const emits = defineEmits(['update:visible'])
// 拷贝一份父组件传递过来的visible
let dialogVisible = ref<boolean>(props.visible)
const handleClick = () => {
  emits('update:visible', !props.visible)
}
// 监听visible的变化
watch(() => props.visible, val => {
  dialogVisible.value = val
  emits('update:visible', val)
})
const computedVisible = computed({
  get: () => props.visible,
  set: (value) => {
    emits('update:visible', value)
  }
})
</script>

<style lang="scss" scoped>

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