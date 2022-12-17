<template>
  <div>
    <select-area @change="changeData"></select-area>
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
</script>

<style lang="scss" scoped>

</style>