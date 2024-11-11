## 来自你的消息:
vue3  pdf预览开源js库, 哪一个好?

## 来自AI的消息:
在选择 Vue3 的 PDF 预览开源库时，以下几个库可能适合您的需求：

1. **pdfvuer**:
   - GitHub: [pdfvuer](https://github.com/sayanghoshx/pdfvuer)
   - 描述: `pdfvuer` 是一个基于 `pdf.js` 的 Vue 组件，专门用于在 Vue 应用程序中预览 PDF 文件。它支持基本的 PDF 查看功能，并且易于集成到 Vue3 项目中。

2. **vue-pdf**:
   - GitHub: [vue-pdf](https://github.com/FranckFreiburger/vue-pdf)
   - 描述: `vue-pdf` 是另一个基于 `pdf.js` 的 Vue 组件，支持 PDF 文件的加载和显示。虽然这个库主要面向 Vue2，但您可以通过一些调整使其在 Vue3 中正常工作。

3. **pdfjs-dist**:
   - GitHub: [pdfjs-dist](https://github.com/mozilla/pdf.js/tree/master/examples/webpack)
   - 描述: `pdfjs-dist` 是 `pdf.js` 的官方封装库，您可以将其集成到 Vue3 项目中。这个库提供了最原生的 PDF 查看功能，并且具有高度的可定制性。

### 选择建议
- **易用性**: 如果您希望快速集成并减少定制需求，`pdfvuer` 可能是一个不错的选择。
- **定制性**: 如果您需要更多的定制功能或高级特性，`pdfjs-dist` 提供了更多的控制和灵活性。
- **兼容性**: 如果您从 Vue2 迁移过来，`vue-pdf` 可能需要一些额外的调整，但它也是一个功能强大的选择。

希望这些信息能帮助您选择适合您项目的 PDF 预览库！

## 来自你的消息:
pdfjs-dist 可以直接使用pdf的url地址去预览吗?

## 来自AI的消息:
是的，`pdfjs-dist` 可以直接使用 PDF 的 URL 地址进行预览。您可以通过将 PDF 文件的 URL 传递给 `pdfjs-dist` 来加载和显示 PDF 文件。下面是一个简单的示例，展示如何在 Vue3 项目中使用 `pdfjs-dist` 来预览一个远程 PDF 文件。

### 安装 `pdfjs-dist`

首先，您需要安装 `pdfjs-dist` 库：

```bash
npm install pdfjs-dist
```

### 在 Vue3 组件中使用 `pdfjs-dist`

接下来，您可以在 Vue3 组件中使用 `pdfjs-dist` 来加载和显示 PDF 文件。

```vue
<template>
  <div>
    <canvas ref="pdfCanvas"></canvas>
  </div>
</template>

<script>
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default {
  props: {
    pdfUrl: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.loadPdf();
  },
  methods: {
    async loadPdf() {
      const loadingTask = pdfjsLib.getDocument(this.pdfUrl);
      const pdfDocument = await loadingTask.promise;
      const page = await pdfDocument.getPage(1);

      const canvas = this.$refs.pdfCanvas;
      const context = canvas.getContext('2d');

      const viewport = page.getViewport({ scale: 1.5 });
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      await page.render(renderContext).promise;
    },
  },
};
</script>

<style scoped>
canvas {
  border: 1px solid #000;
}
</style>
```

### 使用示例

假设您有一个 PDF 文件的 URL，您可以在父组件中使用上述组件来预览它：

```vue
<template>
  <div>
    <PdfViewer pdfUrl="https://example.com/path/to/your-pdf-file.pdf" />
  </div>
</template>

<script>
import PdfViewer from './components/PdfViewer.vue';

export default {
  components: {
    PdfViewer,
  },
};
</script>
```

### 说明

- **pdfjsWorker**: 需要引入 `pdf.worker.entry` 文件，以便 `pdfjs-dist` 能够使用 Web Worker 进行后台处理。
- **getDocument**: 使用 `getDocument` 方法加载 PDF 文件。
- **getPage**: 获取 PDF 文件的第一页并渲染到 Canvas 上。
- **viewport.scale**: 可以根据需要调整缩放比例。

通过这种方式，您可以直接使用 PDF 文件的 URL 地址进行预览，而不需要将文件下载到本地再进行处理。

## 来自你的消息:
使用vue3 <script setup> 结合 pdfjs-dist 实现pdf预览, 预览的配置项要很详细, 使用完整的例子并附加代码说明.

## 来自AI的消息:
好的，下面是一个使用 Vue3 的 `<script setup>` 语法结合 `pdfjs-dist` 实现 PDF 预览的完整示例。这个示例将包括详细的配置项和代码说明。

### 安装 `pdfjs-dist`

首先，您需要安装 `pdfjs-dist` 库：

```bash
npm install pdfjs-dist
```

### 创建 PDF 预览组件

接下来，创建一个新的 Vue3 组件 `PdfViewer.vue`，并使用 `<script setup>` 语法。

```vue
<template>
  <div>
    <canvas ref="pdfCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

// 设置 PDF.js 的全局 worker 路径
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

// 接收 PDF 文件的 URL
const props = defineProps({
  pdfUrl: {
    type: String,
    required: true,
  },
});

// 获取 Canvas 元素的引用
const pdfCanvas = ref(null);

// 在组件挂载后加载 PDF 文件
onMounted(async () => {
  await loadPdf();
});

// 加载并渲染 PDF 文件的函数
async function loadPdf() {
  try {
    // 创建一个加载任务
    const loadingTask = pdfjsLib.getDocument(props.pdfUrl);
    const pdfDocument = await loadingTask.promise;

    // 获取第一页
    const page = await pdfDocument.getPage(1);

    // 获取 Canvas 元素的上下文
    const canvas = pdfCanvas.value;
    const context = canvas.getContext('2d');

    // 设置视图比例
    const viewport = page.getViewport({ scale: 1.5 });
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    // 创建渲染上下文
    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };

    // 渲染页面
    await page.render(renderContext).promise;
  } catch (error) {
    console.error('Error rendering PDF:', error);
  }
}
</script>

<style scoped>
canvas {
  border: 1px solid #000;
}
</style>
```

### 使用示例

假设您有一个 PDF 文件的 URL，您可以在父组件中使用上述组件来预览它：

```vue
<template>
  <div>
    <PdfViewer pdfUrl="https://example.com/path/to/your-pdf-file.pdf" />
  </div>
</template>

<script setup>
import PdfViewer from './components/PdfViewer.vue';
</script>
```

### 代码说明

1. **导入依赖**:
   - `pdfjs-dist`: 用于处理 PDF 文件的核心库。
   - `pdfjs-dist/build/pdf.worker.entry`: `pdfjs-dist` 的 Web Worker 入口文件。

2. **设置全局 worker 路径**:
   - `pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;`: 设置 `pdfjs-dist` 的 Web Worker 路径。

3. **接收 PDF URL**:
   - `const props = defineProps({ pdfUrl: { type: String, required: true } });`: 定义一个 `pdfUrl` 属性，用于接收 PDF 文件的 URL。

4. **获取 Canvas 元素的引用**:
   - `const pdfCanvas = ref(null);`: 使用 `ref` 获取 Canvas 元素的引用。

5. **在组件挂载后加载 PDF 文件**:
   - `onMounted(async () => { await loadPdf(); });`: 在组件挂载后调用 `loadPdf` 函数加载和渲染 PDF 文件。

6. **加载并渲染 PDF 文件**:
   - `const loadingTask = pdfjsLib.getDocument(props.pdfUrl);`: 创建一个加载任务。
   - `const pdfDocument = await loadingTask.promise;`: 等待 PDF 文件加载完成。
   - `const page = await pdfDocument.getPage(1);`: 获取 PDF 文件的第一页。
   - `const viewport = page.getViewport({ scale: 1.5 });`: 设置视图比例。
   - `const renderContext = { canvasContext: context, viewport: viewport };`: 创建渲染上下文。
   - `await page.render(renderContext).promise;`: 渲染页面到 Canvas 上。

通过这种方式，您可以使用 Vue3 的 `<script setup>` 语法结合 `pdfjs-dist` 实现 PDF 文件的预览。您可以根据需要调整视图比例和其他配置项。

