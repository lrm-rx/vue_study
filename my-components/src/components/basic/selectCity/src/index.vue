<template>
  <el-popover v-model:visible="visible" popper-class="rm-el-popper-padding0" placement="bottom-start" :width="430"
    trigger="click">
    <template #reference>
      <div class="select-city-result">
        <div>{{ result }}</div>
        <div class="select-icon">
          <el-icon-arrowdown :class="{ 'rotate': visible }"></el-icon-arrowdown>
        </div>
      </div>
    </template>
    <!-- 内容 -->
    <div class="container">
      <!-- 分类及搜索 -->
      <el-row class="container-el-row">
        <el-col :span="8">
          <el-radio-group v-model="radioValue" size="small">
            <el-radio-button label="按城市" />
            <el-radio-button label="按省份" />
          </el-radio-group>
        </el-col>
        <el-col :offset="3" :span="13">
          <el-select @change="changeCity" v-model="selectValue" :filter-method="filterMethod" filterable
            placeholder="请选择/输入城市" no-match-text="暂无数据" size="small">
            <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-col>
      </el-row>
      <template v-if="radioValue === '按城市'">
        <!-- 城市首字母 -->
        <div class="city-letter">
          <!-- <div v-for="(value, key) in cities" :key="key">{{ key }}</div> -->
          <div class="city-item" @click="clickLetter(item)" v-for="(item, index) in Object.keys(cities)" :key="index">{{
              item
          }}</div>
        </div>
        <el-scrollbar max-height="300px">
          <template v-for="(value, key) in cities" :key="key">
            <el-row class="city-el-row" :id="key">
              <el-col :span="2">{{ key }}:</el-col>
              <el-col :span="22" class="city-name">
                <div @click="clickItem(item)" class="city-name-item" v-for="item in value" :key="item.id">
                  {{ item.name }}
                </div>
              </el-col>
            </el-row>
          </template>
        </el-scrollbar>
      </template>
      <template v-else>
        <div class="province-letter">
          <div class="province-item" @click="clickLetter(item)" v-for="(item, index) in Object.keys(province)"
            :key="index">
            {{ item }}
          </div>
        </div>
        <el-scrollbar max-height="300px">
          <template v-for="(item, index) in Object.values(provinces)" :key="index">
            <template v-for="(subItem, subIndex) in item" :key="subIndex">
              <el-row class="province-el-row" :id="subItem.id">
                <el-col :span="3">{{ subItem.name }}:</el-col>
                <el-col :span="21" class="province-name">
                  <div @click="clickCityName(cityName)" class="province-name-item"
                    v-for="(cityName, index1) in subItem.data" :key="index1">
                    {{ cityName }}
                  </div>
                </el-col>
              </el-row>
            </template>
          </template>
        </el-scrollbar>
      </template>
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import cityData from "../lib/city";
import province from "../lib/province.json"
import { City } from "./types"
// 最终选择的结果
const result = ref<string>("请选择");
// 控制弹出层的显示
const visible = ref<boolean>(false);
// 单选框的值
const radioValue = ref<string>("按城市");
// 下拉框的值
const selectValue = ref("");
// 下拉框显示城市的数据
const options = ref<City[]>([])
// 所有城市数据
const cities = ref(cityData.cities)
// 所有省份数据
const provinces = ref(province)
// 所有的城市数据
const allCity = ref<City[]>([])
// 分发事件
const emits = defineEmits(['selectCity', 'selectCityByProvince'])
// 点击每个城市
const clickItem = (item: City) => {
  result.value = item.name
  visible.value = false
  emits('selectCity', item)
}
const clickCityName = (cityName: string) => {
  result.value = cityName
  visible.value = false
  emits('selectCityByProvince', cityName)
}
const changeCity = (value: number) => {
  const city = allCity.value.find(item => item.id === value)!
  result.value = city.name
  if(radioValue.value === '按城市'){
    emits('selectCity', city)
  }else{
    emits('selectCityByProvince', city.name)
  }
  
}

// 点击字母
const clickLetter = (item: string) => {
  const el = document.getElementById(item)
  if (el) {
    el.scrollIntoView()
  }
}
const getAllCityData = () => {
  // flat 数据扁平化
  const values = Object.values(cities.value).flat(Infinity)
  options.value = values as City[]
}
const filterMethod = (value: string) => {
  const values = Object.values(cities.value).flat(Infinity) as City[]
  allCity.value = values
  if (value === '') {
    options.value = values as City[]
  } else {
    if(radioValue.value === '按城市'){
      // 中文和拼音一起过滤
      options.value = values.filter(item => {
        return item.name.includes(value) || item.spell.includes(value)
      })
    }else{
      // 中文过滤
      options.value = values.filter(item => {
        return item.name.includes(value)
      })
    }
  }
}
onMounted(() => {
  // 获取下拉框的城市数据
  // getAllCityData()
  filterMethod('')
})
</script>

<style lang="scss" scoped>
.select-city-result {
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;

  .rotate {
    transform: rotate(180deg);
  }

  svg {
    width: 1em;
    height: 1em;
    position: relative;
    top: 2px;
    margin-left: 4px;
    transition: all 0.25s linear;
  }
}

.container {
  padding: 6px;

  .container-el-row {
    display: flex;
    align-items: center;
  }

  .city-letter,
  .province-letter {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10px;

    .city-item,
    .province-item {
      padding: 3px 6px;
      margin-right: 8px;
      margin-bottom: 6px;
      border: 1px solid #eee;
      cursor: pointer;
    }
  }

  .city-el-row,
  .province-el-row {
    margin-bottom: 6px;

    .city-name,
    .province-name {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      .city-name-item,
      .province-name-item {
        margin-right: 6px;
        margin-bottom: 6px;
        cursor: pointer;
      }
    }
  }
}
</style>