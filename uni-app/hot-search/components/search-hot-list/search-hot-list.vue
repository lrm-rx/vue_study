<template>
  <view class="search-hot-list-container">
    <!-- 标题 -->
    <view class="search-hot-title">热门搜索</view>
    <!-- 列表 -->
    <block v-for="(item, index) in hotList" :key="item.id">
      <view class="search-hot-item" @click="onItemClick(item)">
        <!-- 序号 -->
        <hot-ranking :ranking="index + 1"></hot-ranking>
        <!-- 文本 -->
        <text class="title line-clamp">{{ item.label }}</text>
        <!-- hot-icon -->
        <image
          class="search-hot-icon"
          src="/static/images/hot-icon.png"
          v-if="index <= 2"
        />
      </view>
    </block>
  </view>
</template>

<script>
import { getSearchHotList } from "api/search";
export default {
  name: "search-hot-list",
  data() {
    return {
      hotList: [],
    };
  },
  created() {
    this.loadSearchHotList();
  },
  methods: {
    async loadSearchHotList() {
      const { data: res } = await getSearchHotList();
      this.hotList = res.list;
    },
    // item的点击事件
    onItemClick(item) {
      this.$emit("onSearch", item.label);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-hot-list-container {
  .search-hot-title {
    font-weight: bold;
    font-size: $uni-font-size-base;
    color: $uni-text-color-hot;
    padding: 0 12px $uni-spacing-col-lg 12px;
    margin: 0 -12px $uni-spacing-col-lg -12px;
    box-shadow: 2px 2px 5px 1px rgba(143, 143, 143, 0.1);
  }
  .search-hot-item {
    display: flex;
    align-items: center;
    padding: $uni-spacing-col-lg 0;
    .title {
      color: $uni-text-color;
      font-size: $uni-font-size-base;
      margin: 0 $uni-spacing-row-base;
    }
    .search-hot-icon {
      width: 14px;
      height: 14px;
    }
  }
}
</style>
