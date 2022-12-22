<template>
  <el-table v-loading="isLoading" :data="data" :element-loading-text="elementLoadingText"
    :element-loading-spinner="elementLoadingSpinner" :element-loading-svg="elementLoadingSvg"
    :element-loading-background="elementLoadingBackground">
    <template v-for="(item, index) in tableOptions" :key="index">
      <el-table-column :label="item.lable" :prop="item.prop" :align="item.align" :width="item.width">
        <template #default="scope">
          <template v-if="(scope.$index + scope.column.id) === currentEditCell">
            <div class="edit-cell-area">
              <el-input size="small" v-model="scope.row[item.prop!]"></el-input>
              <div @click="clickEditCellEvent">
                <slot name="editCell" :scope="scope" v-if="$slots.editCell"></slot>
                <div class="icons" v-else>
                  <el-icon-check class="check-icon" @click="check(scope)"></el-icon-check>
                  <el-icon-close class="close-icon" @click="close(scope)"></el-icon-close>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
            <span v-else>{{ scope.row[item.prop!] }}</span>
            <component :is="`el-icon-${toLine(editIcon)}`" class="edit-cell" @click="clickEditCell(scope)"
              v-if="item.editcell"></component>
          </template>
        </template>
      </el-table-column>
    </template>
    <!-- 操作项 -->
    <el-table-column v-if="actionOptions" :label="actionOptions!.lable" :align="actionOptions!.align"
      :width="actionOptions!.width">
      <template #default="scope">
        <slot name="action" :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref, PropType, computed } from 'vue'
import { TableOptions } from './types'
import { toLine } from '@/utils'

const props = defineProps({
  // 表格的配置
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true
  },
  // 表格数据
  data: {
    type: Array as PropType<any[]>,
    required: true
  },
  // 加载方案
  elementLoadingText: {
    type: String,
  },
  // 加载的图标名
  elementLoadingSpinner: {
    type: String,
  },
  // 加载的图标
  elementLoadingSvg: {
    type: String,
  },
  // 背景遮罩的颜色
  elementLoadingBackground: {
    type: String,
  },
  // 可编辑单元格显示的图标
  editIcon: {
    type: String,
    default: 'edit'
  }
});

// 分发事件
const emits = defineEmits(['confirm', 'cancel'])

// 当前点击的单元格
const currentEditCell = ref<string>('')
// 编辑单元格内容
const clickEditCell = (scope: any) => {
  // 获得一个唯一的标识
  currentEditCell.value = scope.$index + scope.column.id
}
const clickEditCellEvent = () => {
  currentEditCell.value = ''
}
// 确定(点击勾)
const check = (scope: any) => {
  // currentEditCell.value = ''
  emits('confirm', scope)
}
// 取消(点击叉)
const close = (scope: any) => {
  // currentEditCell.value = ''
  emits('cancel', scope)
}

// 过滤操作选项之后的配置
let tableOptions = computed(() => props.options.filter(item => !item.action))
// 找出操作项的配置
const actionOptions = computed(() => props.options.find(item => item.action))
// 表格是否在加载中
const isLoading = computed(() => !props.data || !props.data.length)



</script>

<style lang="scss" scoped>
.edit-cell {
  width: 1em;
  height: 1em;
  position: relative;
  top: 2px;
  left: 4px;
  cursor: pointer;
}

.edit-cell-area {
  display: flex;

  .icons {
    display: flex;
    align-items: center;
    cursor: pointer;

    .check-icon {
      color: green;
    }

    .close-icon {
      color: red;
    }

    svg {
      width: 1em;
      height: 1em;
      margin-left: 8px;
    }
  }
}
</style>