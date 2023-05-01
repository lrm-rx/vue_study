<template>
  <view class="hot-search-container">
    <view class="search-bar-box">
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
    </view>
    <!-- 热搜列表 -->
    <view class="search-hot-list-box card" v-if="showType === HOT_LIST">
      <search-hot-list @onSearch="onSearchConfirm"></search-hot-list>
    </view>
    <!-- 搜索历史 -->
    <view class="search-history-box" v-else-if="showType === SEARCH_HISTORY">
      <search-history @onItemClick="onSearchConfirm"></search-history>
    </view>
    <!-- 搜索结果 -->
    <view class="search-result-list-box" v-else>
      <search-result-list :queryStr="searchVal"></search-result-list>
    </view>
  </view>
</template>

<script>
// 当mescroll-body写在子组件时,父页面需引入mescroll-comp.js的mixins
import MescrollCompMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mixins/mescroll-comp.js";
import { getDefaultText } from "api/search";
import { mapMutations } from "vuex";
// 0: 热搜列表 - 默认
const HOT_LIST = "0";
// 1：搜索历史
const SEARCH_HISTORY = "1";
// 2：搜索结果
const SEARCH_RESULT = "2";
export default {
  mixins: [MescrollCompMixin], // 使用mixin
  data() {
    return {
      HOT_LIST,
      SEARCH_HISTORY,
      SEARCH_RESULT,
      // 默认情况下 || 点击输入框的取消按钮时，显示【热搜列表】
      // 当 searchBar 获取焦点时 || 点击输入框清空按钮时，显示 【搜索历史】
      // 用户点击热搜列表 item || 用户点击搜索历史 || 用户按下搜索键，显示 【搜索结果】
      showType: HOT_LIST,
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
    ...mapMutations("search", ["addSearchData"]),
    // 获取推荐搜索文本
    async loadDefaultText() {
      const { data: res } = await getDefaultText();
      this.defaultText = res.defaultText;
    },
    // 搜索内容
    onSearchConfirm(val) {
      // 用户未输入文本，直接搜索时，使用【推荐搜索文本】
      this.searchVal = val ? val : this.defaultText;
      // 保存搜索历史数据
      this.addSearchData(this.searchVal);
      // 切换视图
      if (this.searchVal) {
        this.showType = SEARCH_RESULT;
      }
    },
    // searchbar 获取焦点
    onSearchFocus(val) {
      this.showType = SEARCH_HISTORY;
    },
    // searchbar 失去焦点
    onSearchBlur(val) {},
    // searchbar 清空内容
    onSearchClear() {
      // 切换视图
      this.showType = SEARCH_HISTORY;
    },
    // searchbar 取消按钮
    onSearchCancel(val) {
      this.showType = HOT_LIST;
    },
  },
};
</script>

<style lang="scss" scoped>
.hot-search-container {
  .search-bar-box {
    background-color: $uni-bg-color;
    padding: $uni-spacing-row-sm;
    position: -webkit-sticky;
    position: sticky;
    z-index: 9;
    /* #ifndef H5 */
    top: 0;
    /* #endif */
    /* #ifdef H5 */
    top: 44px;
    /* #endif */
  }
}
</style>
