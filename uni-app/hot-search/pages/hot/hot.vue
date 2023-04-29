<template>
  <view class="hot-container">
    <!-- logo -->
    <image class="logo" src="@/static/images/logo.png" mode="aspectFit" />
    <!-- search -->
    <view class="search-box" @click="onToSearch">
      <my-search placeholderText="搜索"></my-search>
    </view>
    <!-- tabs -->
    <view class="tab-sticky">
      <my-tabs
        :tabData="tabData"
        :defaultIndex="currentIndex"
        :config="{ textColor: '#333333' }"
        @tabClick="tabClick"
      ></my-tabs>
    </view>
    <!-- list视图 -->
    <swiper
      class="swiper"
      @animationfinish="onSwiperEnd"
      @change="onSwiperChange"
      :current="currentIndex"
      :style="{ height: currentSwiperHeight + 'px', minHeight: '100px' }"
    >
      <!-- swiperItem 的数量, 需要由 tabData 来决定 -->
      <swiper-item
        class="swiper-item"
        v-for="(tabItem, tabIndex) in tabData"
        :key="tabIndex"
      >
        <view>
          <!-- 加载动画 -->
          <uni-load-more status="loading" v-if="isLoading" />
          <block v-else>
            <hot-list-item
              :class="'hot-list-item-' + tabIndex"
              v-for="(item, index) in listData[tabIndex]"
              :key="index"
              :data="item"
              :ranking="index + 1"
            ></hot-list-item>
          </block>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import { getHotTabs, getHotListFromTabType } from "api/hot";
export default {
  data() {
    return {
      // tabs 数据源
      tabData: [],
      // 当前的切换 index
      currentIndex: 0,
      // list列表数据加载的loading
      isLoading: true,
      // 以 index 为 key, 以对应的list为 value
      listData: {},
      // 当前swiper的高度
      currentSwiperHeight: 0,
      // 缓存高度的计算结果, 以index为key, 以对应的高度为value
      swiperHeightData: {},
      // 当前的滚动距离
      currentPageScrollTop: 0,
    };
  },
  created() {
    this.loadHotTbas();
  },
  // 监听页面的滚动
  onPageScroll({ scrollTop }) {
    this.currentPageScrollTop = scrollTop;
  },
  methods: {
    onToSearch() {
      uni.navigateTo({ url: "/subpkg/pages/hot-search/hot-search" });
    },
    async loadHotTbas() {
      const { data: res } = await getHotTabs();
      this.tabData = res.list;
      this.loadHotListFromTab();
    },

    // 获取list数据
    async loadHotListFromTab() {
      // 1. 没有获取到数据
      // if (!this.listData[this.currentIndex]) {
      this.isLoading = true;
      const id = this.tabData[this.currentIndex].id;
      const { data: res } = await getHotListFromTabType(id);
      this.listData[this.currentIndex] = res.list;
      this.isLoading = false;
      // 渲染完成数据之后, 计算高度
      // this.$nextTick()存在一定的兼容性问题
      setTimeout(async () => {
        // 获取到当前 swiper 的高
        this.currentSwiperHeight = await this.getCurrentSwiperHeight();
        // 放入缓存
        this.swiperHeightData[this.currentIndex] = this.currentSwiperHeight;
      }, 0);
      // }
    },
    /**
     * tab item 的点击事件
     */
    tabClick(index) {
      this.currentIndex = index;
      // 获取列表数据
      // this.loadHotListFromTab();
    },
    // 监听 swiper 的切换事件
    onSwiperChange(e) {
      if (this.currentPageScrollTop > 130) {
        // 控制列表滚动位置
        uni.pageScrollTo({
          scrollTop: 130,
        });
      }
      // 解决官方 swiper 在 change 里改变 current 值无限左右抖动的 bug
      if (e.detail.source === "touch") {
        this.currentIndex = e.detail.current;
      }
    },
    // 解决卡顿问题；等待 swiper 动画完成之后，获取数据
    onSwiperEnd() {
      // 判断缓存是否有数据
      if (!this.listData[this.currentIndex]) {
        // 获取列表数据
        this.loadHotListFromTab();
        return;
      }
      this.currentSwiperHeight = this.swiperHeightData[this.currentIndex];
    },
    // 计算当前 swiper高度
    getCurrentSwiperHeight() {
      return new Promise((resolve, reject) => {
        // 累加和
        let sum = 0;
        // 1. 获取所有的item
        const query = uni.createSelectorQuery().in(this);
        query
          .selectAll(`.hot-list-item-${this.currentIndex}`)
          .boundingClientRect((res) => {
            res.forEach((item) => {
              // 2. 获取所有 item 的高度
              // 3. 把所有的高度累加
              sum += item.height;
            });
            resolve(sum);
          })
          .exec();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.hot-container {
  background-color: $uni-bg-color;

  .logo {
    width: 100%;
    height: 80px;
  }

  .search-box {
    padding: 0 16px;
    margin-bottom: 8px;
  }

  .tab-sticky {
    padding: 0 16px;
    position: -webkit-sticky;
    position: sticky;
    z-index: 99;
    /* #ifndef H5 */
    top: 0;
    /* #endif */
    /* #ifdef H5 */
    top: 44px;
    /* #endif */
  }
}
</style>
