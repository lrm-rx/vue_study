<template>
  <view class="operate-container">
    <!-- 输入框 -->
    <view class="comment-box" @click="onCommitClick">
      <my-search
        :placeholderText="placeholder"
        :config="{
          height: 28,
          backgroundColor: '#eeedf4',
          icon: '/static/images/input-icon.png',
          textColor: '#a6a5ab',
          border: 'none',
        }"
      ></my-search>
    </view>
    <!-- 点赞 -->
    <view class="options-box">
      <article-praise
        :articleData="articleData"
        @changePraise="$emit('changePraise', $event)"
      />
    </view>
    <!-- 收藏 -->
    <view class="options-box">
      <article-collect
        :articleData="articleData"
        @changeCollect="$emit('changeCollect', $event)"
      />
    </view>
  </view>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "article-operate",
  props: {
    articleData: {
      type: Object,
      required: true,
    },
    placeholder: {
      type: String,
      default: "评论一句，前排打call...",
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions("user", ["isLogin"]),
    /**
     * my-search 的点击事件
     */
    async onCommitClick() {
      // 进行登录判定，登录之后允许发布评论
      if (!(await this.isLogin())) {
        return;
      }
      this.$emit("commitClick");
    },
  },
};
</script>

<style lang="scss" scoped>
.operate-container {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $uni-bg-color;
  padding: 4px 6px 12px 6px;
  display: flex;
  border-top: 1px solid $uni-bg-color-grey;
  align-items: center;
  .comment-box {
    flex-grow: 1;
  }

  .options-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    .img {
      width: $uni-img-size-base;
      height: $uni-img-size-base;
    }
    .txt {
      font-size: $uni-font-size-sm;
      color: $uni-text-color;
    }
  }
}
</style>
