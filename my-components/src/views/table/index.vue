<template>
  <div>
    <pro-table isEditRow v-model:editRowIndex="editRowIndex" :data="sourceTabeData" :options="options"
      elementLoadingText="正在努力加载中..." @confirm="check" @cancel="close" editIcon="Edit" pagination v-model:currentPage="current" v-model:pageSize="pageSize" :total="total"
      paginationAlign="center" @sizeChange="handleSizeChange" @currentChange="handleCurrentChange">
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
      <template #editRow="{ scope }">
        <el-button size="small" type="primary">确认</el-button>
        <el-button size="small" type="danger">取消</el-button>
      </template>
    </pro-table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { TableOptions } from '@/components/basic/table/src/types';
interface ISourceTabeData {
  date: string,
  name: string,
  address: string
}
const sourceTabeData = ref<ISourceTabeData[]>([])
const editRowIndex = ref<string>('')
const current = ref<number>(1)
const pageSize = ref<number>(10)
const total = ref<number>(0)
// setTimeout(() => {
//   sourceTabeData.value = tableData
// }, 2000);

const getTableList = () => {
  axios.post('/api/list', {
    current: current.value,
    pageSize: pageSize.value
  }).then((res: any) => {
    if (res.data.code !== '200') return
    sourceTabeData.value = res.data.data.rows
    total.value = res.data.data.total
    // console.log('返回的数据', res);
  }).catch((error) => {
    console.error(error);
  })
}
// 分布的页大小改变
const handleSizeChange = (value: number) => {
  pageSize.value = value
  current.value = 1
  getTableList()
}
// 分布的页数改变
const handleCurrentChange = (value: number) => {
  current.value = value
  getTableList()
}
onMounted(() => {
  getTableList()
})
const edit = (scope: any) => {
  editRowIndex.value = 'edit'
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
    prop: 'action',
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