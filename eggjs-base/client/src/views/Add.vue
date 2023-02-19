<template>
  <div>
    <div class="uploader-content">
      <van-uploader v-model="fileList" :max-count="1" :after-read="afterRead" />
    </div>
    <van-cell-group>
      <van-field v-model="title" label="文章标题" placeholder="文章标题" />
      <van-field v-model="summary" label="文章简介" placeholder="文章简介" />
      <van-field v-model="content" label="文章内容" placeholder="文章内容" rows="6" maxlength="150" show-word-limit
        type="textarea" autosize />
    </van-cell-group>
    <van-button type="primary" class="add-button" @click="handleAdd">提交</van-button>
  </div>
</template>

<script>
import { Uploader, CellGroup, Field, Button } from "vant";
export default {
  components: {
    [Uploader.name]: Uploader,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button
  },
  props: {},
  data() {
    return {
      fileList: [],
      title: "",
      summary: "",
      content: "",
      img: ""
    }
  },
  methods: {
    afterRead(fileInfo) {
      this.img = fileInfo.content;
    },
    handleAdd() {
      const data = {
        title: this.title,
        summary: this.summary,
        content: this.content,
        img: this.img
      }
      console.log("data:", data);
    }
  }
}
</script>

<style scoped>
.uploader-content {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.add-button {
  position: absolute;
  left: 0;
  bottom: 80px;
  width: 100%;
}
</style>
