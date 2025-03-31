<template>
  <div>
    <el-cascader
      v-model="selectedOptions"
      :options="options"
      :props="cascaderProps"
      @change="handleChange"
      clearable
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 模拟的数据
const options = ref([
  {
    value: '1',
    label: '选项1',
    children: [
      {
        value: '1-1',
        label: '子选项1-1'
      },
      {
        value: '1-2',
        label: '子选项1-2'
      }
    ]
  },
  {
    value: '2',
    label: '选项2',
    children: [
      {
        value: '2-1',
        label: '子选项2-1'
      },
      {
        value: '2-2',
        label: '子选项2-2'
      }
    ]
  },
  {
    value: '3',
    label: '选项3',
    children: [
      {
        value: '3-1',
        label: '子选项3-1'
      },
      {
        value: '3-2',
        label: '子选项3-2'
      }
    ]
  }
]);

// 选中的选项
const selectedOptions = ref([]);

// 级联选择器的配置
const cascaderProps = {
  multiple: true // 开启多选模式
};

// 处理级联选择变化
const handleChange = (values) => {
  // 找出当前选中的第一层选项
  const firstLevelValues = values.map(value => value[0]);

  // 去重，确保第一层选项唯一
  const uniqueFirstLevelValues = [...new Set(firstLevelValues)];

  if (uniqueFirstLevelValues.length > 1) {
    // 如果选中了多个第一层选项，保留最后一个第一层选项及其子项
    const lastFirstLevelValue = uniqueFirstLevelValues[uniqueFirstLevelValues.length - 1];

    // 过滤出与最后一个第一层选项相关的值
    const filteredValues = values.filter(value => value[0] === lastFirstLevelValue);

    // 更新选中的值
    selectedOptions.value = filteredValues;
  }
};
</script>

<style scoped>
/* 自定义样式 */
</style>