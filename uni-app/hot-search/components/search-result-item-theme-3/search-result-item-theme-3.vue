<template>
  <!-- 样式3 ： 三张图片样式 -->
  <view class="search-result-item-box">
    <!-- 标题 -->
    <rich-text :nodes="data.title" class="item-title line-clamp-2"></rich-text>
    <!-- 内容区 - 样式 3 -->
    <view class="item-info-img-box">
      <image
        v-for="(item, index) in data.pic_list"
        :key="item + index"
        class="item-img"
        :src="item"
      />
    </view>
    <!-- 底部 -->
    <view class="item-desc-bottom">
      <view class="item-author">{{ data.nickname }}</view>
      <view class="item-read-num">
        <uni-icons class="read-num-icon" color="#999999" type="compose" />
        <text>{{ data.updateTime | relativeTime }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data: () => ({}),
  created() {
    if (this.data.pic_list.length > 3) {
      this.data.pic_list = this.data.pic_list.splice(0, 2);
    }
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

  .item-info-img-box {
    display: flex;
    // 图片
    .item-img {
      width: 33%;
      height: 70px;
      box-sizing: border-box;
    }
    .item-img:nth-child(1n + 1) {
      margin-right: $uni-spacing-row-sm;
    }
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
