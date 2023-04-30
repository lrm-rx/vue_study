<template>
  <view class="search-result-item-box">
    <!-- 标题 -->
    <rich-text :nodes="data.title" class="item-title line-clamp-2"></rich-text>
    <!-- 内容 -->
    <rich-text
      :nodes="data.description"
      class="item-desc line-clamp-2"
    ></rich-text>
    <!-- 底部 -->
    <view class="item-desc-bottom">
      <view class="item-author">{{ data.author }}</view>
      <view class="item-read-num">
        <uni-icons class="read-num-icon" color="#999999" type="compose" />
        <text>{{ data.updateTime | relativeTime }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "search-result-item-theme-1",
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
.search-result-item-box {
  margin-bottom: $uni-spacing-col-big;
  // 标题
  .item-title {
    font-size: $uni-font-size-base;
    font-weight: bold;
    color: $uni-text-color-title;
  }

  .item-desc {
    margin-top: $uni-spacing-col-base;
    font-size: $uni-font-size-base;
    color: $uni-color-subtitle;
  }

  // 底部作者 + 阅读量
  .item-desc-bottom {
    margin-top: $uni-spacing-col-base;
    display: flex;
    color: $uni-text-color-grey;
    font-size: $uni-font-size-sm;
    .item-author {
      margin-right: $uni-spacing-row-lg;
    }
    .item-read-num {
      .read-num-icon {
        color: $uni-text-color-grey;
        margin-right: $uni-spacing-row-sm;
      }
    }
  }
}
</style>
