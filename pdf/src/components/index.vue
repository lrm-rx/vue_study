<script setup lang="ts">
import { reactive, computed, ref, watchEffect } from "vue";
import VuePdfEmbed from "vue-pdf-embed";
const loading = ref(true);
const props = defineProps({
  pdfUrl: {
    type: String,
    required: true
  }
})
const state = reactive({
  source: props.pdfUrl, // 预览pdf文件地址
  pageNum: 1, // 当前页面
  scale: 1, // 缩放比例
  numPages: 0, // 总页数
});

watchEffect(() => {
  if (state.numPages > 0) {
    loading.value = true;
  }
})

// 用来获取总后页数
const handleDocument = (pdf: any) => {
  console.log(pdf);
  state.numPages = pdf._pdfInfo.numPages
}

const scale = computed(() => `transform:scale(${state.scale})`)
function lastPage() {
  if (state.pageNum > 1) {
    state.pageNum -= 1;
  }
}
function nextPage() {
  if (state.pageNum < state.numPages) {
    state.pageNum += 1;
  }
}
function pageZoomOut() {
  if (state.scale < 2) {
    state.scale += 0.1;
  }
}
function pageZoomIn() {
  if (state.scale > 1) {
    state.scale -= 0.1;
  }
}

// 打印
const pdfRef = ref();
const printPdf = () => {
  pdfRef.value.print(100, "test", true)
}

// 下载
const downloadPdf = () => {
  pdfRef.value.download("test.pdf");
}
</script>

<template>
  <div class="pdf-preview">
    <div class="pdf-wrap">
      <VuePdfEmbed v-if="loading" :source="state.source" ref="pdfRef" :style="scale" class="vue-pdf-embed"
        :page="state.pageNum" @loaded="handleDocument" />
      <div v-else>加载中....</div>
    </div>
    <div class="page-tool">
      <div class="page-tool-item" @click="lastPage">上一页</div>
      <div class="page-tool-item" @click="nextPage">下一页</div>
      <div class="page-tool-item">{{ state.pageNum }}/{{ state.numPages }}</div>
      <div class="page-tool-item" @click="pageZoomOut">放大</div>
      <div class="page-tool-item" @click="pageZoomIn">缩小</div>
      <div class="page-tool-item" @click="downloadPdf">下载</div>
      <div class="page-tool-item" @click="printPdf">打印</div>
    </div>
  </div>
</template>

<style scoped lang="css">
.pdf-preview {
  position: relative;
  height: 100vh;
  padding: 20px 0;
  box-sizing: border-box;
  background-color: e9e9e9;
}

.pdf-preview .pdf-wrap {
  height: 100%;
  overflow-y: auto;
}

.vue-pdf-embed {
  height: 100%;
  text-align: center;
  width: 1000px;
  margin: 0 auto;
  box-sizing: border-box;
}

.page-tool {
  position: absolute;
  bottom: 35px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  background: rgb(66, 66, 66);
  color: white;
  border-radius: 19px;
  z-index: 100;
  cursor: pointer;
  margin-left: 50%;
  transform: translateX(-50%);
}

.page-tool-item {
  padding: 8px 15px;
  padding-left: 10px;
  cursor: pointer;
}
</style>