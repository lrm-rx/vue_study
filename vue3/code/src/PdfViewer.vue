<template>
  <div>
    <div v-for="pageNumber in numPages" :key="pageNumber" class="pdf-page">
      <canvas :ref="setCanvasRef"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import pdfjsLib from "./pdfViewer";

const props = defineProps({
  pdfUrl: {
    type: String,
    required: true,
  },
});

const numPages = ref(0);
const canvases = ref([]);

onMounted(async () => {
  await loadPdf();
});

const setCanvasRef = (el) => {
  if (el) {
    canvases.value.push(el);
  }
};

const loadPdf = async () => {
  const loadingTask = pdfjsLib.getDocument(props.pdfUrl);
  const pdf = await loadingTask.promise;
  numPages.value = pdf.numPages;

  for (let pageNumber = 1; pageNumber <= numPages.value; pageNumber++) {
    await renderPage(pdf, pageNumber);
  }
};

const renderPage = async (pdf, pageNumber) => {
  const page = await pdf.getPage(pageNumber);
  const scale = 1.5;
  const viewport = page.getViewport({ scale });

  const canvas = canvases.value[pageNumber - 1];
  const context = canvas.getContext("2d");
  canvas.height = viewport.height;
  canvas.width = viewport.width;

  const renderContext = {
    canvasContext: context,
    viewport: viewport,
  };

  await page.render(renderContext).promise;
};
</script>

<style scoped>
.pdf-page {
  margin-bottom: 20px;
}
</style>
