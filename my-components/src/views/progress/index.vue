<template>
  <div>
    <rm-progress :percentage="100" status="success" :indeterminate="true" :duration="5" />
    <br>
    <rm-progress :percentage="80" />
    <br>
    <rm-progress :percentage="60" type="dashboard" />
    <br>
    <rm-progress :percentage="80" isAnimate />
    <br>
    <rm-progress :percentage="80" type="circle" isAnimate />
    <br>
    <rm-progress :time="5000" isAnimate :text-inside="true" :stroke-width="24" :percentage="100" status="success" />
    <br>
    <rm-progress :percentage="100" status="success" type="circle" isAnimate />
    <br>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>