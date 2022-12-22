<template>
  <div>
    <pro-table :data="sourceTabeData" :options="options" elementLoadingText="正在努力加载中..." @confirm="check" @cancel="close"
      editIcon="Edit">
      <template #date="{ scope }">
        <el-icon-timer></el-icon-timer>
        {{ scope.row.date }}
      </template>
      <template #editCell="{ scope }">
        <div style="margin-left: 6px; display: flex;">
          <el-button size="small" type="primary" @click="confirm(scope)">确认</el-button>
          <el-button size="small" type="danger" @click="cancel(scope)">取消</el-button>
        </div>
      </template>
      <template #name="{ scope }">
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>name: {{ scope.row.name }}</div>
            <div>address: {{ scope.row.address }}</div>
          </template>
          <template #reference>
            <el-tag>{{ scope.row.name }}</el-tag>
          </template>
        </el-popover>
      </template>
      <template #action="{ scope }">
        <el-button size="small" type="primary" @click="edit(scope)">编辑</el-button>
        <el-button size="small" type="danger">删除</el-button>
      </template>
    </pro-table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { TableOptions } from '@/components/basic/table/src/types';
interface ISourceTabeData {
  date: string,
  name: string,
  address: string
}
const sourceTabeData = ref<ISourceTabeData[]>([])
// setTimeout(() => {
//   sourceTabeData.value = tableData
// }, 2000);
onMounted(() => {
  sourceTabeData.value = tableData
})
const edit = (scope: any) => {
  console.log('行:', scope);
}
const confirm = (scope: any) => {
  console.log('单元格:', scope);
}
const cancel = (scope: any) => {
  console.log('单元格:', scope);
}
// 确定(点击勾)
const check = (scope: any) => {
  console.log('确定', scope);
}
// 取消(点击叉)
const close = (scope: any) => {
  console.log('取消', scope);
}
// 表格配置
const options: TableOptions[] = [
  {
    lable: '日期',
    prop: 'date',
    align: 'center',
    slot: 'date',
    editcell: true
  },
  {
    lable: '姓名',
    prop: 'name',
    align: 'center',
    slot: 'name'
  },
  {
    lable: '地址',
    prop: 'address',
    align: 'center',
    editcell: true
  },
  {
    lable: '操作',
    align: 'center',
    action: true
  }
]
// 表格数据
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<style lang="scss" scoped>
svg {
  width: 1em;
  height: 1em;
}
</style>