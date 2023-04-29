<template>
  <view class="hot-search-container">
    <view class="search-har-box">
      <my-search
        :isShowInput="true"
        :placeholderText="defaultText"
        v-model="searchVal"
        @search="onSearchConfirm"
        @focus="onSearchFocus"
        @blur="onSearchBlur"
        @clear="onSearchClear"
        @cancel="onSearchCancel"
      ></my-search>
      <!-- 热搜列表 -->
      <view class="search-hot-list-box">
        <search-hot-list></search-hot-list>
      </view>
      <!-- 搜索历史 -->
      <view class="search-history-box">
        <search-history></search-history>
      </view>
      <!-- 搜索结果 -->
      <view class="search-result-list-box">
        <search-result-list></search-result-list>
      </view>
    </view>
  </view>
</template>

<script>
import { getDefaultText } from "api/search";
export default {
  data() {
    return {
      // 绑定输入框中的内容
      searchVal: "",
      // 默认的placeholderText
      defaultText: "请输入内容",
      // 搜索历史数据
      searchData: [],
    };
  },
  created() {
    this.loadDefaultText();
  },
  methods: {
    // 获取推荐搜索文本
    async loadDefaultText() {
      const { data: res } = await getDefaultText();
      this.defaultText = res.defaultText;
    },
    // 搜索内容
    onSearchConfirm(val) {
      // 用户未输入文本，直接搜索时，使用【推荐搜索文本】
      this.searchVal = val ? val : this.defaultText;
    },
    // searchbar 获取焦点
    onSearchFocus(val) {},
    // searchbar 失去焦点
    onSearchBlur(val) {},
    // searchbar 清空内容
    onSearchClear() {
      // 切换视图
    },
    // searchbar 取消按钮
    onSearchCancel(val) {},
  },
};
</script>

<style lang="scss" scoped>
.hot-search-container {
  .search-har-box {
    background-color: $uni-bg-color;
    padding: $uni-spacing-row-sm;
    position: sticky;
    top: 0px;
    z-index: 9;
  }
}
</style>
