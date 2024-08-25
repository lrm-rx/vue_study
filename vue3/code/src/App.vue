<template>
  <SplitPanel class="page-box" ratio="1/1">
    <template #one>
      <div class="left"></div>
    </template>

    <template #two>
      <SplitPanel class="right" horizontal>
        <template #one>
          <div class="up"></div>
        </template>
        <template #two>
          <div class="down"></div>
        </template>
      </SplitPanel>
    </template>
  </SplitPanel>
</template>

<script setup lang="ts" name="App">
import SplitPanel from "./SplitPanel.vue";
</script>

<style lang="scss" scoped>
.page-box {
  width: 100vw;
  height: 100vh;

  .left {
    height: 100%;
    background-color: sandybrown;
  }

  .right {
    height: 100%;

    .up {
      height: 100%;
      background-color: darkgreen;
    }

    .down {
      min-height: 100%;
      background-color: deepskyblue;
    }
  }
}
</style>
