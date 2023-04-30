<template>
  <!-- 样式2 ： 一张图片样式 -->
  <view class="search-result-item-box">
    <!-- 标题 -->
    <rich-text :nodes="data.title" class="item-title line-clamp-2"></rich-text>
    <view class="item-info-box">
      <view class="item-desc-box">
        <rich-text
          :nodes="data.description"
          class="item-desc line-clamp-2"
        ></rich-text>
        <view class="item-desc-bottom">
          <view class="item-author">{{ data.nickname }}</view>
          <view class="item-read-num">
            <uni-icons class="read-num-icon" color="#999999" type="compose" />
            <text>{{ data.updateTime | relativeTime }}</text>
          </view>
        </view>
      </view>
      <image class="item-img" :src="data.pic_list[0]" />
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

  .item-info-box {
    display: flex;
    margin-top: $uni-spacing-col-base;
    .item-desc-box {
      width: 65%;
      font-size: $uni-font-size-base;
      color: $uni-color-subtitle;
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

    .item-img {
      width: 33%;
      height: 70px;
    }
  }
}
</style>
