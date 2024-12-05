<template>
  <el-table :data="tableData" :span-method="spanMethod" border>
    <el-table-column v-for="column in columns" :key="column.prop" :prop="column.prop" :label="column.label" :width="column.width"></el-table-column>
  </el-table>
</template>

<script setup>
import { ref, computed } from 'vue';

const tableData = ref([
  { id: 1, uuid: 'fasdf', name: 'ming', age: 2, carName: '宝马', carList_id: 1, carList_age: 2 },
  { id: 1, uuid: 'fasdf', name: 'ming', age: 2, carName: '奥迪', carList_id: 3231, carList_age: 4123 },
  { id: 1, uuid: 'fasdf', name: 'ming', age: 2, carName: '长安', carList_id: 4512312, carList_age: 41334245 },
  { id: 2, uuid: 'fasdf', name: 'lucky', age: 2, carName: '长城', carList_id: 312314, carList_age: 554122542 },
  { id: 2, uuid: 'fasdf', name: 'lucky', age: 2, carName: '牛马', carList_id: 906789, carList_age: 976896 }
]);

const columns = ref([
  { prop: 'id', label: 'ID', width: '100' },
  { prop: 'uuid', label: 'UUID', width: '250' },
  { prop: 'name', label: 'Name', width: '120' },
  { prop: 'age', label: 'Age', width: '80' },
  { prop: 'carName', label: 'Car Name', width: '120' },
  { prop: 'carList_id', label: 'Car List ID', width: '150' },
  { prop: 'carList_age', label: 'Car List Age', width: '150' }
]);

const noMergeProps = new Set(['carName', 'carList_id', 'carList_age']); // 不需要合并的列属性

const idRowCount = computed(() => {
  const rowCountMap = new Map();
  let currentId = null;
  let count = 0;

  for (const row of tableData.value) {
    if (row.id !== currentId) {
      if (count > 0) {
        rowCountMap.set(currentId, count);
      }
      currentId = row.id;
      count = 1;
    } else {
      count++;
    }
  }
  if (count > 0) {
    rowCountMap.set(currentId, count);
  }
  return rowCountMap;
});

const spanMethod = ({ row, column, rowIndex }) => {
  const prop = column.property;

  // 检查当前列是否在不需要合并的列中
  if (noMergeProps.has(prop)) {
    return { rowspan: 1, colspan: 1 }; // 不合并的列返回正常
  }

  const currentId = row.id;
  const currentRowCount = idRowCount.value.get(currentId);

  if (rowIndex > 0 && row.id === tableData.value[rowIndex - 1].id) {
    return { rowspan: 0, colspan: 0 }; // 隐藏当前单元格
  }

  return { rowspan: currentRowCount, colspan: 1 }; // 合并单元格的处理
};
</script>

<style scoped>
/* 任何需要的样式 */
</style>