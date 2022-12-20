<template>
  <div class="rm-el-select-margin-right10">
    <el-select placeholder="请选择省份" filterable  v-model="province" clearable>
      <el-option v-for="item in provincesList" :key="item.code" :value="item.code" :label="item.name">
        {{ item.name }}
      </el-option>
    </el-select>
    <el-select :disabled="!province" placeholder="请选择城市" filterable  v-model="city" clearable>
      <el-option v-for="item in citiesList" :key="item.code" :value="item.code" :label="item.name">
        {{ item.name }}
      </el-option>
    </el-select>
    <el-select :disabled="!province || !city" placeholder="请选择区域" filterable  v-model="area" clearable>
      <el-option v-for="item in areasList" :key="item.code" :value="item.code" :label="item.name">
        {{ item.name }}
      </el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch} from 'vue'
import allAreaData from '../lib/pca-code.json'
export interface DataItem {
  code: string,
  name: string,
  children?: DataItem[]
}

export interface ChangeData {
  code: string,
  name: string
}

// 下拉框选择省份的值
const province = ref<string>('')
// 下拉框选择城市的值
const city = ref<string>('')
// 下拉框选择区域的值
const area = ref<string>('')
// 所有的省市区数据
const provincesList = ref(allAreaData)
// 城市下拉框数据
const citiesList = ref<DataItem[]>([])
// 区域下拉框数据
const areasList = ref<DataItem[]>([])

const emits = defineEmits(['change'])
// 监听选择省份
watch(() => province.value, (val: string) => {
  if (val) {
    citiesList.value = provincesList.value.find((item: DataItem) => item.code === province.value)!.children!
  }
  city.value = ""
  area.value = ""
})
// 监听选择城市
watch(() => city.value, (val: string) => {
  if (val) {
    areasList.value = citiesList.value.find((item: DataItem) => item.code === city.value)!.children!
  }
  area.value = ""
})
// 监听选择区域之后分发change事件并返回数据给父组件 
watch(() => area.value, (val: string) => {
  if (val) {
    const provinceData: ChangeData = {
      code: province.value,
      name: province.value && allAreaData.find((item: DataItem) => item.code === province.value)!.name
    }
    const cityData: ChangeData = {
      code: city.value,
      name: city.value && citiesList.value.find((item: DataItem) => item.code === city.value)!.name
    }
    const areaData: ChangeData = {
      code: val,
      name: val && areasList.value.find((item: DataItem) => item.code === val)!.name
    }
    emits('change', {
      province: provinceData,
      city: cityData,
      area: areaData
    })
  }
})


</script>

<style lang="scss" scoped>

</style>