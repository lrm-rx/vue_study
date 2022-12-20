<template>
  <div>
    <select-city @selectCity="changeData" @selectCityByProvince="changeData1"></select-city>
  </div>
</template>

<script setup lang="ts">
// const selectCity = (value: any) => {
//   console.log(value);
// }
// const selectCityByProvince = (value: any) => {
//   console.log(value);
// }
const changeData = (data: any) => {
  console.log(data);
}

const changeData1 = (data:any) => {
  console.log(data);
}
</script>

<style lang="scss" scoped>

</style>