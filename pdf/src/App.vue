<script setup lang="ts">
import PDFView from '@/components/index.vue';
import jsPdf from "/js.pdf"
</script>
<template>
  <div>
    <PDFView :pdfUrl="jsPdf" />
  </div>
</template>
