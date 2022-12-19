<template>
  <div>
    <el-progress :precentage="schedule" v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
const props = defineProps({
  precentage: {
    type: Number,
    default: 0
  },
  isAnimate: {
    type: Boolean,
    default: false
  },
  time: {
    type: Number,
    default: 3000
  }
})
const schedule = ref(0)
onMounted(() => {
  if(props.isAnimate) {
    const t = Math.ceil(props.time / props.precentage);
    const timer = setInterval(() => {
      schedule.value += 1;
      if(schedule.value >= props.precentage) {
        schedule.value = props.precentage
        clearInterval(timer)
      }
    }, t)
  }else{
    schedule.value = props.precentage
  }
})
</script>

<style lang="scss" scoped>

</style>