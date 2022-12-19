<template>
  <div>
    <select-area @change="changeData"></select-area>
    <select-area-four class="select-area-four" @change="changeData1"></select-area-four>
  </div>
</template>

<script setup lang="ts">
export interface ChangeData {
  code: string,
  name: string
}
export interface SelectData {
  province: ChangeData,
  city: ChangeData,
  area: ChangeData
}
const changeData = (data: SelectData) => {
  console.log(data);
}

const changeData1 = (data:any) => {
  console.log(data);
}
</script>

<style lang="scss" scoped>
.select-area-four {
  margin-top: 100px;
}
</style>