<template>
  <view class="comment-item-container">
    <!-- 头像 -->
    <view class="avatar-box">
      <image class="avatar" :src="data.avatar" />
    </view>
    <!-- 评论信息 -->
    <view class="info-box">
      <!-- 评论人 -->
      <text class="comment-user">{{ data.nickName || data.uname }}</text>
      <!-- 评论内容 -->
      <text class="comment-info">{{ data.content }}</text>
      <!-- 评论时间 -->
      <text class="comment-time">{{ data.postTime | relativeTime }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "article-comment-item",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.comment-item-container {
  padding: $uni-spacing-col-lg 0;
  display: flex;
  .info-box {
    margin-left: $uni-spacing-row-sm;
    display: flex;
    flex-direction: column;
    .comment-user {
      font-size: $uni-font-size-sm;
      font-weight: bolder;
      color: $uni-text-color;
    }
    .comment-info {
      margin-top: $uni-spacing-col-sm;
      font-size: $uni-font-size-base;
      color: $uni-text-color;
    }
    .comment-time {
      margin-top: $uni-spacing-col-sm;
      font-size: $uni-font-size-sm;
      color: $uni-text-color-grey;
    }
  }
}
</style>
