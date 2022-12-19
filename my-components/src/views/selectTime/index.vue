<template>
  <div>
    <select-time @startChange="startChange" @endChange="endChange" />
  </div>
  <div style="margin-top: 20px;">
    <select-date @startChange="dateStartChange" @endChange="dateEndChange" />
  </div>
</template>

<script setup lang="ts">
interface endValue {
  startTime: string,
  endTime: string
}

interface dateEndValue {
  startDate: Date,
  endDate: Date
}

const startChange = (val: string) => {
  console.log(val);
};

const endChange = (val: endValue) => {
  console.log(val);
};

const dateStartChange = (val: Date) => {
  console.log(val)
}
const dateEndChange = (val: dateEndValue) => {
  console.log(val)
}
</script>

<style lang="scss" scoped>

</style>