<template>
  <div id="app">
    <!-- <h1>PDF Viewer</h1>
    <PdfViewer pdfUrl="http://localhost:5173/src/123.pdf" /> -->
    <div ref="container" class="scroll-container">
      <div v-for="i in inputValue" :key="i" style="height: 50px">
        <div>{{ i }}</div>
      </div>
    </div>
    <input v-model="inputValue" type="number" />
    <p>垂直滚动条：{{ vertical ? "存在" : "无" }}</p>
    <p>水平滚动条：{{ horizontal ? "存在" : "无" }}</p>
  </div>
</template>

<script setup>
// import PdfViewer from "./PdfViewer.vue";
import { ref } from "vue";
import { useHasScrollbar } from "./hooks/useHasScrollbar";
const container = ref(null);
const inputValue = ref(1);
const { vertical, horizontal } = useHasScrollbar(container);
</script>

<style>
.scroll-container {
  overflow: auto;
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
}
</style>
