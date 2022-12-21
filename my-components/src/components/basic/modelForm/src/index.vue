<template>
  <el-dialog v-model="dialogVisible" v-bind="$attrs">
    <template #default>
      <el-scrollbar :max-height="`${scrollHeight}px`">
        <rm-form :options="options" label-width="80px" ref="form" @on-change="onChange" @before-upload="beforeUpload"
          @on-preview="onPreview" @on-remove="onRemove" @before-remove="beforeRemove" @on-success="onSuccess"
          @on-exceed="onExceed">
          <template #uploadArea>
            <slot name="uploadArea"></slot>
          </template>
          <template #uploadTip>
            <slot name="uploadTip"></slot>
          </template>
        </rm-form>
      </el-scrollbar>
    </template>
    <template #footer>
      <slot name="footer" :form="form"></slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch, PropType } from "vue"
import { FormOptions } from '../../form/src/types/types'

const props = defineProps({
  scrollHeight: {
    type: Number,
    default: 300
  },
  visible: {
    type: Boolean,
    defalut: false
  },
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  },
  // 下面方法对应为处理上传事件
  onChange: {
    type: Function
  },
  beforeUpload: {
    type: Function
  },
  onPreview: {
    type: Function
  },
  onRemove: {
    type: Function
  },
  beforeRemove: {
    type: Function
  },
  onSuccess: {
    type: Function
  },
  onExceed: {
    type: Function
  },
})

const emits = defineEmits(['update:visible'])

const dialogVisible = ref<boolean>(props.visible)

const form = ref()

watch(() => props.visible, (val: any) => {
  dialogVisible.value = val
})

watch(() => dialogVisible.value, (val: any) => {
  emits('update:visible', val)
})
</script>

<style scoped>

</style>