<template>
  <el-table v-bind="$attrs" v-loading="isLoading" :data="tableData" :element-loading-text="elementLoadingText"
    :element-loading-spinner="elementLoadingSpinner" :element-loading-svg="elementLoadingSvg"
    :element-loading-background="elementLoadingBackground" @row-click="rowClick">
    <template v-for="(item, index) in tableOptions" :key="index">
      <el-table-column :label="item.lable" :prop="item.prop" :align="item.align" :width="item.width">
        <template #default="scope">
          <!-- 可编辑行操作 -->
          <template v-if="scope.row.rowEdit">
            <el-input size="small" v-model="scope.row[item.prop]"></el-input>
          </template>
          <!-- 没有编辑行操作 -->
          <template v-else>
            <template v-if="(scope.$index + scope.column.id) === currentEditCell">
              <div class="edit-cell-area">
                <el-input size="small" v-model="scope.row[item.prop]"></el-input>
                <div @click.stop="clickEditCellEvent">
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
              <span v-else>{{ scope.row[item.prop] }}</span>
              <component :is="`el-icon-${toLine(editIcon)}`" class="edit-cell" @click.stop="clickEditCell(scope)"
                v-if="item.editcell"></component>
            </template>
          </template>
        </template>
      </el-table-column>
    </template>
    <!-- 操作项 -->
    <el-table-column v-if="actionOptions" :label="actionOptions!.lable" :align="actionOptions!.align"
      :width="actionOptions!.width">
      <template #default="scope">
        <slot name="editRow" v-if="scope.row.rowEdit"></slot>
        <slot name="action" :scope="scope" v-else></slot>
      </template>
    </el-table-column>
  </el-table>
  <div class="rm-pagination" :style="{ justifyContent: paginationAlignJustify }" v-if="pagination">
    <el-pagination v-bind="$attrs" v-model:current-page="copyCurrentPage" v-model:page-size="conpyPageSize"
      :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </div>
</template>

<script lang="ts" setup>
import { ref, PropType, watch, computed, onMounted } from 'vue'
import { TableOptions } from './types'
import { toLine } from '@/utils'
import cloneDeep from 'lodash/cloneDeep';

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
  },
  // 是否可以编辑行
  isEditRow: {
    type: Boolean,
    default: false
  },
  // 编辑行按钮的标识
  editRowIndex: {
    type: String,
    default: ''
  },
  // ------------------ 分页 -------------------
  pagination: {
    type: Boolean,
    default: false
  },
  // 当前是第几页的数据
  currentPage: {
    type: Number,
    default: 1
  },
  // 分页大小项
  pageSizes: {
    type: Array as PropType<number[]>,
    default: [10, 20, 50, 100]
  },
  // 当前页大小
  pageSize: {
    type: Number,
    default: 10
  },
  // 总数
  total: {
    type: Number,
    default: 0
  },
  // 分页的排列方式
  paginationAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left'
  }
});

// 分发事件
const emits = defineEmits(['confirm', 'cancel', 'update:editRowIndex', 'update:currentPage', 'update:pageSize', 'sizeChange', 'currentChange'])

// 当前点击的单元格
const currentEditCell = ref<string>('')
// 拷贝一份当前页
const copyCurrentPage = ref<number>(props.currentPage)
// 拷贝一份当前页大小
const conpyPageSize = ref<number>(props.pageSize)
// 拷贝一份表格的数据
const tableData = ref<any[]>(cloneDeep(props.data))
// 拷贝一份按钮的标识
const cloneEditRowIndex = ref<string>(props.editRowIndex)
// 分页的页大小改变
const handleSizeChange = (value: number) => {
  emits('sizeChange', value)
  emits('update:pageSize', value)
}
// 分页的页数改变
const handleCurrentChange = (value: number) => {
  emits('currentChange', value)
  emits('update:currentPage', value)
}
// 监听分页变化
watch(() => props.currentPage, value => {
  // console.log('props.currentPage页数:', copyCurrentPage.value);
  // emits('update:currentPage', value)
})
watch(() => props.pageSize, value => {
  // console.log('props.pageSize页数:', copyCurrentPage.value);
  // console.log('props.pageSize页大小:', conpyPageSize.value);
  // emits('update:pageSize', value)
})
// 监听父组件传递过来的数据
watch(() => props.data, value => {
  tableData.value = cloneDeep(value)
  initTable()
}, { deep: true })
// 监听父组件传递过来的标识
watch(() => props.editRowIndex, value => {
  if (value) {
    cloneEditRowIndex.value = value
  }
})
const initTable = () => {
  tableData.value.map(item => {
    // 代表当前是否是可编辑的状态
    item.rowEdit = false
  })
}
// 初始化
onMounted(() => {
  initTable()
})
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
// 点击每一行的事件
const rowClick = (row: any, column: any) => {
  
  // 判断当前点击的是否为操作项的内容
  if (column.label === actionOptions.value!.lable) {
    
    // 编辑行的操作
    if (props.isEditRow && cloneEditRowIndex.value === props.editRowIndex) {
      // 点击的按钮是做可编辑的操作
      row.rowEdit = !row.rowEdit
      // 重置其他行数据的rowEdit
      tableData.value.map(item => {
        if (item !== row) {
          item.rowEdit = false
        }
      })
      // 要重置按钮的标识
      if (!row.rowEdit) {
        emits('update:editRowIndex', '')
      }
    }
  }
}

// 过滤操作选项之后的配置
let tableOptions = computed(() => props.options.filter(item => !item.action))
// 找出操作项的配置
const actionOptions = computed(() => props.options.find(item => item.action))
// 表格是否在加载中
const isLoading = computed(() => !props.data || !props.data.length)
// 排列方式
const paginationAlignJustify = computed(() => {
  if (props.paginationAlign === 'left') return 'flex-start'
  if (props.paginationAlign === 'center') return 'center'
  if (props.paginationAlign === 'right') return 'flex-end'
})


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

.rm-pagination {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}
</style>