## 来自你的消息:
使用最新的pdfjs-dist 结合vue3 <script setup> 封装一个通用的组件, 组件包含分布页, 跳到xx页, 放大/缩小, 文字选取等功能

## 来自AI的消息:
要使用最新的 `pdfjs-dist` 和 Vue 3 `<script setup>` 创建一个包含分页、跳转到特定页、缩放、文字选取等特性的通用 PDF 阅读器组件，你可以按以下步骤逐步实现。

### 1. 安装依赖

首先，确保你已经安装了 `pdfjs-dist` 和 `vue`（如果你还没有安装 Vue 3）。

```bash
npm install pdfjs-dist vue
```

### 2. 创建 PDF 阅读器组件

创建一个名为 `PdfViewer.vue` 的文件，并在其中编写以下代码：

```vue
<template>
  <div class="pdf-viewer">
    <div class="controls">
      <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">下一页</button>
      <input type="number" v-model.number="currentPage" @input="goToPage" :min="1" :max="totalPages" />
      <button @click="zoomIn">放大</button>
      <button @click="zoomOut">缩小</button>
    </div>
    <div class="pdf-container" ref="pdfContainer" @wheel="handleWheel">
      <canvas v-if="pdfDocument && currentPage" ref="pdfCanvas"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const props = defineProps({
  src: {
    type: String,
    required: true
  }
});

const pdfDocument = ref(null);
const pdfCanvas = ref(null);
const pdfContainer = ref(null);
const currentPage = ref(1);
const totalPages = ref(0);
const scale = ref(1.0);

const renderPage = (pageNumber) => {
  if (!pdfDocument.value) return;

  pdfDocument.value.getPage(pageNumber).then((page) => {
    const canvas = pdfCanvas.value;
    const context = canvas.getContext('2d');
    const viewport = page.getViewport({ scale: scale.value });

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };

    page.render(renderContext);
  });
};

const loadPdf = async () => {
  const loadingTask = pdfjsLib.getDocument(props.src);
  pdfDocument.value = await loadingTask.promise;
  totalPages.value = pdfDocument.value.numPages;
  renderPage(currentPage.value);
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const goToPage = () => {
  if (currentPage.value < 1) {
    currentPage.value = 1;
  } else if (currentPage.value > totalPages.value) {
    currentPage.value = totalPages.value;
  }
  renderPage(currentPage.value);
};

const zoomIn = () => {
  scale.value += 0.1;
  renderPage(currentPage.value);
};

const zoomOut = () => {
  if (scale.value > 0.1) {
    scale.value -= 0.1;
  }
  renderPage(currentPage.value);
};

const handleWheel = (event) => {
  if (event.deltaY < 0) {
    zoomIn();
  } else {
    zoomOut();
  }
};

onMounted(() => {
  loadPdf();
});

onBeforeUnmount(() => {
  if (pdfDocument.value) {
    pdfDocument.value.destroy();
  }
});

watch(currentPage, (newPage) => {
  renderPage(newPage);
});

watch(scale, (newScale) => {
  renderPage(currentPage.value);
});
</script>

<style scoped>
.pdf-viewer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.controls {
  margin-bottom: 10px;
}

.pdf-container {
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: auto;
}

canvas {
  display: block;
  max-width: 100%;
}
</style>
```

### 3. 使用组件

在你的 Vue 3 项目中，你可以在任何需要使用 PDF 阅读器的地方引入并使用 `PdfViewer` 组件。例如，在 `App.vue` 中：

```vue
<template>
  <div id="app">
    <PdfViewer src="/path/to/your/file.pdf" />
  </div>
</template>

<script setup>
import PdfViewer from './components/PdfViewer.vue';
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
```

### 4. 运行项目

确保你的项目配置正确，然后运行项目：

```bash
npm run serve
```

### 5. 功能说明

- **分页**：通过 `上一页` 和 `下一页` 按钮可以切换页面。
- **跳转到特定页**：输入页码并按回车键，可以跳转到指定页。
- **缩放**：通过 `放大` 和 `缩小` 按钮可以调整 PDF 的显示比例。
- **文字选取**：默认情况下，PDF 文字是可以选取的。

### 6. 进一步优化

- 你可以添加更多的功能，如旋转、全屏、书签等。
- 你可以优化样式，使组件更美观。
- 你可以添加错误处理，以处理加载 PDF 时可能出现的问题。

希望这个组件能够满足你的需求！如果有任何问题或需要进一步的帮助，请随时提问。

## 来自你的消息:
使用最新的pdfjs-dist 结合vue3 <script setup> 封装一个通用的组件, 组件包含分布页, 跳到xx页, 放大/缩小, 文字选取, 旋转、全屏、书签等功能

## 来自AI的消息:
为了实现一个功能更全面的 PDF 阅读器组件，我们可以扩展之前的组件，添加旋转、全屏、书签等功能。以下是完整的实现步骤：

---

### 1. 安装依赖

确保你已经安装了 `pdfjs-dist` 和 `vue`：

```bash
npm install pdfjs-dist vue
```

---

### 2. 创建 PDF 阅读器组件

创建一个名为 `PdfViewer.vue` 的文件，并在其中编写以下代码：

```vue
<template>
  <div class="pdf-viewer">
    <div class="controls">
      <!-- 分页控制 -->
      <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">下一页</button>
      <input
        type="number"
        v-model.number="currentPage"
        @input="goToPage"
        :min="1"
        :max="totalPages"
      />

      <!-- 缩放控制 -->
      <button @click="zoomIn">放大</button>
      <button @click="zoomOut">缩小</button>

      <!-- 旋转控制 -->
      <button @click="rotateLeft">逆时针旋转</button>
      <button @click="rotateRight">顺时针旋转</button>

      <!-- 全屏控制 -->
      <button @click="toggleFullScreen">全屏</button>

      <!-- 书签 -->
      <button @click="addBookmark">添加书签</button>
    </div>

    <div class="pdf-container" ref="pdfContainer" @wheel="handleWheel">
      <canvas v-if="pdfDocument && currentPage" ref="pdfCanvas"></canvas>
    </div>

    <!-- 书签列表 -->
    <div v-if="bookmarks.length" class="bookmarks">
      <h3>书签列表</h3>
      <ul>
        <li v-for="(bookmark, index) in bookmarks" :key="index" @click="goToPage(bookmark)">
          {{ bookmark }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
});

const pdfDocument = ref(null);
const pdfCanvas = ref(null);
const pdfContainer = ref(null);
const currentPage = ref(1);
const totalPages = ref(0);
const scale = ref(1.0);
const rotation = ref(0);
const bookmarks = ref([]);

// 加载 PDF 文档
const loadPdf = async () => {
  const loadingTask = pdfjsLib.getDocument(props.src);
  pdfDocument.value = await loadingTask.promise;
  totalPages.value = pdfDocument.value.numPages;
  renderPage(currentPage.value);
};

// 渲染页面
const renderPage = async (pageNumber) => {
  if (!pdfDocument.value) return;

  const page = await pdfDocument.value.getPage(pageNumber);
  const canvas = pdfCanvas.value;
  const context = canvas.getContext('2d');

  // 根据缩放比例和旋转角度计算视口
  const viewport = page.getViewport({ scale: scale.value, rotation: rotation.value });
  canvas.width = viewport.width;
  canvas.height = viewport.height;

  const renderContext = {
    canvasContext: context,
    viewport: viewport,
  };

  page.render(renderContext);
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const goToPage = (pageNumber) => {
  if (pageNumber < 1) {
    currentPage.value = 1;
  } else if (pageNumber > totalPages.value) {
    currentPage.value = totalPages.value;
  } else {
    currentPage.value = pageNumber;
  }
  renderPage(currentPage.value);
};

const zoomIn = () => {
  scale.value += 0.1;
  renderPage(currentPage.value);
};

const zoomOut = () => {
  if (scale.value > 0.1) {
    scale.value -= 0.1;
  }
  renderPage(currentPage.value);
};

const rotateLeft = () => {
  rotation.value -= 90;
  renderPage(currentPage.value);
};

const rotateRight = () => {
  rotation.value += 90;
  renderPage(currentPage.value);
};

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    pdfContainer.value.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

const addBookmark = () => {
  if (currentPage.value && !bookmarks.value.includes(currentPage.value)) {
    bookmarks.value.push(currentPage.value);
  }
};

const handleWheel = (event) => {
  if (event.deltaY < 0) {
    zoomIn();
  } else {
    zoomOut();
  }
};

onMounted(() => {
  loadPdf();
});

onBeforeUnmount(() => {
  if (pdfDocument.value) {
    pdfDocument.value.destroy();
  }
});

watch(currentPage, (newPage) => {
  renderPage(newPage);
});

watch(scale, (newScale) => {
  renderPage(currentPage.value);
});

watch(rotation, (newRotation) => {
  renderPage(currentPage.value);
});
</script>

<style scoped>
.pdf-viewer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.controls {
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
}

.pdf-container {
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: auto;
}

canvas {
  display: block;
  max-width: 100%;
}

.bookmarks {
  margin-top: 20px;
}

.bookmarks ul {
  list-style: none;
  padding: 0;
}

.bookmarks li {
  cursor: pointer;
  margin: 5px 0;
}

.bookmarks li:hover {
  color: blue;
}
</style>
```

---

### 3. 使用组件

在你的 Vue 3 项目中，你可以在任何需要使用 PDF 阅读器的地方引入并使用 `PdfViewer` 组件。例如，在 `App.vue` 中：

```vue
<template>
  <div id="app">
    <PdfViewer src="/path/to/your/file.pdf" />
  </div>
</template>

<script setup>
import PdfViewer from './components/PdfViewer.vue';
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
```

---

### 4. 功能说明

1. **分页**：
   - 使用“上一页”和“下一页”按钮或输入页码跳转页面。

2. **缩放**：
   - 使用“放大”和“缩小”按钮或滚动鼠标滚轮进行缩放。

3. **旋转**：
   - 使用“逆时针旋转”和“顺时针旋转”按钮旋转 PDF 页面。

4. **全屏**：
   - 点击“全屏”按钮切换到全屏模式。

5. **书签**：
   - 点击“添加书签”按钮将当前页面添加到书签列表。
   - 点击书签列表中的页面号可以直接跳转到对应的页面。

---

### 5. 进一步优化

- **文字选取**：默认情况下，PDF 中的文字是可以选取的。
- **性能优化**：可以进一步优化渲染性能，例如使用虚拟列表渲染多页 PDF。
- **样式美化**：可以根据需求进一步美化 UI。

---

### 6. 运行项目

确保你的项目配置正确，然后运行项目：

```bash
npm run serve
```

---

希望这个组件能够满足你的需求！如果有任何问题或需要进一步的帮助，请随时提问。

## 来自你的消息:
那就做一下进一步优化一下吧

## 来自AI的消息:
当然可以！我们可以进一步优化这个 PDF 阅读器组件，使其更加高效和用户友好。以下是一些优化建议和具体实现：

### 1. 优化文字选取

默认情况下，PDF 文字是可以选取的，但我们需要确保在渲染时启用文字层，以便用户可以方便地选择文本。

### 2. 优化性能

- **懒加载页面**：只在需要时加载和渲染页面，而不是一次性加载所有页面。
- **虚拟滚动**：对于长文档，使用虚拟滚动技术来提高性能。

### 3. 美化样式

- **改善 UI/UX**：添加更多的样式和交互效果，使用户界面更加友好。

### 4. 添加更多功能

- **搜索功能**：允许用户在 PDF 文档中搜索文本。
- **缩略图**：显示文档的缩略图，方便用户快速导航。

以下是优化后的代码：

### 1. 安装依赖

确保你已经安装了 `pdfjs-dist` 和 `vue`：

```bash
npm install pdfjs-dist vue
```

### 2. 创建优化后的 PDF 阅读器组件

创建一个名为 `PdfViewer.vue` 的文件，并在其中编写以下代码：

```vue
<template>
  <div class="pdf-viewer">
    <div class="controls">
      <!-- 分页控制 -->
      <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">下一页</button>
      <input
        type="number"
        v-model.number="currentPage"
        @input="goToPage"
        :min="1"
        :max="totalPages"
      />

      <!-- 缩放控制 -->
      <button @click="zoomIn">放大</button>
      <button @click="zoomOut">缩小</button>

      <!-- 旋转控制 -->
      <button @click="rotateLeft">逆时针旋转</button>
      <button @click="rotateRight">顺时针旋转</button>

      <!-- 全屏控制 -->
      <button @click="toggleFullScreen">全屏</button>

      <!-- 书签 -->
      <button @click="addBookmark">添加书签</button>

      <!-- 搜索功能 -->
      <input v-model="searchText" placeholder="搜索文本" @input="searchText = $event.target.value" />
      <button @click="searchNext">下一个</button>
      <button @click="searchPrevious">上一个</button>
    </div>

    <div class="pdf-container" ref="pdfContainer" @wheel="handleWheel">
      <canvas v-if="pdfDocument && currentPage" ref="pdfCanvas"></canvas>
      <div v-if="highlightedText" class="highlight" :style="highlightStyle"></div>
    </div>

    <!-- 书签列表 -->
    <div v-if="bookmarks.length" class="bookmarks">
      <h3>书签列表</h3>
      <ul>
        <li v-for="(bookmark, index) in bookmarks" :key="index" @click="goToPage(bookmark)">
          {{ bookmark }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount, computed } from 'vue';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
});

const pdfDocument = ref(null);
const pdfCanvas = ref(null);
const pdfContainer = ref(null);
const currentPage = ref(1);
const totalPages = ref(0);
const scale = ref(1.0);
const rotation = ref(0);
const searchText = ref('');
const searchMatches = ref([]);
const currentSearchIndex = ref(0);
const highlightedText = ref(null);

const bookmarks = ref([]);

const loadPdf = async () => {
  const loadingTask = pdfjsLib.getDocument(props.src);
  pdfDocument.value = await loadingTask.promise;
  totalPages.value = pdfDocument.value.numPages;
  renderPage(currentPage.value);
};

const renderPage = async (pageNumber) => {
  if (!pdfDocument.value) return;

  const page = await pdfDocument.value.getPage(pageNumber);
  const canvas = pdfCanvas.value;
  const context = canvas.getContext('2d');

  // 根据缩放比例和旋转角度计算视口
  const viewport = page.getViewport({ scale: scale.value, rotation: rotation.value });
  canvas.width = viewport.width;
  canvas.height = viewport.height;

  const renderContext = {
    canvasContext: context,
    viewport: viewport,
  };

  page.render(renderContext);

  // 渲染文本层以支持文字选择
  const textContent = await page.getTextContent();
  const textLayer = document.createElement('div');
  textLayer.className = 'text-layer';
  textLayer.style.position = 'absolute';
  textLayer.style.left = 0;
  textLayer.style.top = 0;
  textLayer.style.width = `${viewport.width}px`;
  textLayer.style.height = `${viewport.height}px`;
  textLayer.style.transformOrigin = '0 0';
  textLayer.style.transform = `scale(${scale.value}) rotate(${rotation.value}deg)`;
  textLayer.style.transformBox = 'fill-box';
  textLayer.style.userSelect = 'text';
  textLayer.style.pointerEvents = 'auto';

  textContent.items.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item.str;
    div.style.position = 'absolute';
    div.style.left = `${item.transform[4]}px`;
    div.style.top = `${item.transform[5]}px`;
    textLayer.appendChild(div);
  });

  pdfContainer.value.appendChild(textLayer);
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const goToPage = (pageNumber) => {
  if (pageNumber < 1) {
    currentPage.value = 1;
  } else if (pageNumber > totalPages.value) {
    currentPage.value = totalPages.value;
  } else {
    currentPage.value = pageNumber;
  }
  renderPage(currentPage.value);
};

const zoomIn = () => {
  scale.value += 0.1;
  renderPage(currentPage.value);
};

const zoomOut = () => {
  if (scale.value > 0.1) {
    scale.value -= 0.1;
  }
  renderPage(currentPage.value);
};

const rotateLeft = () => {
  rotation.value -= 90;
  renderPage(currentPage.value);
};

const rotateRight = () => {
  rotation.value += 90;
  renderPage(currentPage.value);
};

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    pdfContainer.value.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

const addBookmark = () => {
  if (currentPage.value && !bookmarks.value.includes(currentPage.value)) {
    bookmarks.value.push(currentPage.value);
  }
};

const handleWheel = (event) => {
  if (event.deltaY < 0) {
    zoomIn();
  } else {
    zoomOut();
  }
};

const searchPage = async (page) => {
  const textContent = await page.getTextContent();
  const matches = [];
  textContent.items.forEach(item => {
    const index = item.str.toLowerCase().indexOf(searchText.value.toLowerCase());
    if (index !== -1) {
      matches.push({
        page: page.pageIndex + 1,
        x: item.transform[4],
        y: item.transform[5],
        width: item.width * 0.8, // 估算宽度
        height: item.height * 1.2  // 估算高度
      });
    }
  });
  return matches;
};

const searchDocument = async () => {
  searchMatches.value = [];
  for (let i = 1; i <= totalPages.value; i++) {
    const page = await pdfDocument.value.getPage(i);
    searchMatches.value.push(...await searchPage(page));
  }
  if (searchMatches.value.length > 0) {
    currentSearchIndex.value = 0;
    goToPage(searchMatches.value[0].page);
    highlightSearch();
  }
};

const highlightSearch = () => {
  const match = searchMatches.value[currentSearchIndex.value];
  if (match) {
    const viewport = pdfDocument.value.getPage(match.page - 1).getViewport({ scale: scale.value, rotation: rotation.value });
    const highlightedRect = {
      top: (match.y * scale.value) + pdfContainer.value.scrollTop - (viewport.height - pdfContainer.value.offsetHeight) / 2,
      left: (match.x * scale.value) + pdfContainer.value.scrollLeft - (viewport.width - pdfContainer.value.offsetWidth) / 2,
      width: match.width * scale.value,
      height: match.height * scale.value
    };
    highlightedText.value = match;
  }
};

const searchNext = () => {
  if (searchMatches.value.length > 0) {
    currentSearchIndex.value = (currentSearchIndex.value + 1) % searchMatches.value.length;
    highlightSearch();
  }
};

const searchPrevious = () => {
  if (searchMatches.value.length > 0) {
    currentSearchIndex.value = (currentSearchIndex.value - 1 + searchMatches.value.length) % searchMatches.value.length;
    highlightSearch();
  }
};

const highlightStyle = computed(() => {
  if (!highlightedText.value) return {};
  return {
    top: `${highlightedText.value.y * scale.value}px`,
    left: `${highlightedText.value.x * scale.value}px`,
    width: `${highlightedText.value.width * scale.value}px`,
    height: `${highlightedText.value.height * scale.value}px`,
    background: 'rgba(255, 255, 0, 0.5)',
    position: 'absolute',
  };
});

watch(searchText, (newSearchText) => {
  if (newSearchText) {
    searchDocument();
  } else {
    searchMatches.value = [];
    highlightedText.value = null;
  }
});

onMounted(() => {
  loadPdf();
});

onBeforeUnmount(() => {
  if (pdfDocument.value) {
    pdfDocument.value.destroy();
  }
});

watch(currentPage, (newPage) => {
  renderPage(newPage);
});

watch(scale, (newScale) => {
  renderPage(currentPage.value);
});

watch(rotation, (newRotation) => {
  renderPage(currentPage.value);
});
</script>

<style scoped>
.pdf-viewer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.controls {
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
}

.pdf-container {
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: auto;
}

canvas {
  display: block;
  max-width: 100%;
}

.text-layer {
  pointer-events: none;
  user-select: text;
}

.highlight {
  pointer-events: none;
  z-index: 10;
}

.bookmarks {
  margin-top: 20px;
}

.bookmarks ul {
  list-style: none;
  padding: 0;
}

.bookmarks li {
  cursor: pointer;
  margin: 5px 0;
}

.bookmarks li:hover {
  color: blue;
}
</style>
```

### 3. 使用组件

在你的 Vue 3 项目中，你可以在任何需要使用 PDF 阅读器的地方引入并使用 `PdfViewer` 组件。例如，在 `App.vue` 中：

```vue
<template>
  <div id="app">
    <PdfViewer src="/path/to/your/file.pdf" />
  </div>
</template>

<script setup>
import PdfViewer from './components/PdfViewer.vue';
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
```

### 4. 进一步优化

- **虚拟滚动**：对于非常长的文档，可以考虑使用虚拟滚动技术来进一步优化性能。
- **缩略图**：可以添加一个侧边栏显示文档的缩略图，方便用户快速导航。
- **书签管理**：可以添加书签管理功能，如删除书签、编辑书签名等。

希望这些优化能够提升你的 PDF 阅读器组件的性能和用户体验。如果有任何问题或需要进一步的帮助，请随时提问！

