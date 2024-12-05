<template>
  <div id="app">
    <h1>PDF Viewer</h1>
    <PdfViewer pdfUrl="http://localhost:5173/src/123.pdf" />
  </div>
</template>

<script setup>
import PdfViewer from "./PdfViewer.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
