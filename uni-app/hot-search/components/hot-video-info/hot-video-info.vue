<template>
  <view class="hot-video-info-container">
    <view class="video-title"> {{ data.title }} </view>
    <view class="video-info">
      <view class="author-box">
        <image class="avatar" :src="data.poster_small" />
        <text class="author-txt">{{ data.source_name }}</text>
      </view>
      <view class="barrage-box">
        <uni-icons class="barrage-icon" type="videocam" />
        <text class="barrage-num">{{ data.fmplaycnt }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'hot-video-info',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.hot-video-info-container {
  .video-title {
    position: absolute;
    top: $uni-spacing-col-big;
    left: $uni-spacing-row-lg;
    color: $uni-text-color-inverse;
    font-size: $uni-font-size-lg;
  }
  .video-info {
    display: flex;
    justify-content: space-between;
    background-color: $uni-bg-color;
    padding: $uni-spacing-col-sm $uni-spacing-row-lg;
    .author-box {
      display: flex;
      align-items: center;
      .author-txt {
        margin-left: $uni-spacing-row-sm;
        font-size: $uni-font-size-base;
        color: $uni-text-color;
        font-weight: bold;
      }
    }
    .barrage-box {
      display: flex;
      align-items: center;
      .barrage-num {
        margin-left: $uni-spacing-row-sm;
        font-size: $uni-font-size-sm;
        color: $uni-text-color;
      }
    }
  }
}
</style>
