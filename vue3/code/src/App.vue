<template>
  <div class="app">
    <h2>我是App组件</h2>
    <Hello />
    <Child />
    <hr />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="150" />
      <el-table-column label="Delivery Info">
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column label="Address Info">
          <el-table-column prop="state" label="State" width="120" />
          <el-table-column prop="city" label="City" width="120" />
          <el-table-column prop="address" label="Address" />
          <el-table-column prop="zip" label="Zip" width="120" />
        </el-table-column>
      </el-table-column>
    </el-table>
    <hr />
    <ul>
      <li :ref="addRef" v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="App">
import {onBeforeUnmount, ref} from "vue"
import Child from "./Child.vue";
const refList = ref([])
const list = ref([
  1,
  2,
  3,
])
const addRef = (el:any) => {
  console.log("el:", el)
  refList.value.push(el)
}
const tableData = ref([
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
  },
  {
    date: "2016-05-08",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
  },
  {
    date: "2016-05-06",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
  },
  {
    date: "2016-05-07",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
  },
]);
onBeforeUnmount(() => {
  refList.value = []
})
</script>

<style>
.app {
  background-color: #ddd;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px;
}
</style>
