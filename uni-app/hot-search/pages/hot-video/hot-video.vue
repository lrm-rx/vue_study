<template>
  <view class="hot-video-container">
    <!-- 1. 导入 mescroll-body -->
    <mescroll-body
      ref="mescrollRef"
      @init="mescrollInit"
      @down="downCallback"
      @up="upCallback"
    >
      <block v-for="(item, index) in videoList" :key="index">
        <hot-video-item
          :data="item"
          @click="onItemClick"
          @videoPlay="videoPlay"
        />
      </block>
    </mescroll-body>
  </view>
</template>

<script>
// 2. 导入 mixin
import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
import { getHotVideoList } from "api/video";
import { mapMutations } from "vuex";
export default {
  // 3. 注册 mixin
  mixins: [MescrollMixin],
  data() {
    return {
      // 数据源
      videoList: [],
      size: 10,
      page: 1,
      // 是否为 init
      isInit: true,
      // 实例
      mescroll: null,
    };
  },
  created() {
    // this.loadHotVideoList();
  },
  mounted() {
    this.mescroll = this.$refs.mescrollRef.mescroll;
  },
  methods: {
    ...mapMutations("video", ["setVideoData"]),
    // 防止多个视频一起播放
    videoPlay(e) {
      let currentId = `video${e.currentTarget.dataset.id}`;
      this.videoContent = uni.createVideoContext(currentId);
      this.videoList.forEach((item) => {
        if (`video${item.id}` !== currentId) {
          uni.createVideoContext(`video${item.id}`).pause();
        }
      });
    },
    /**
     * 获取列表数据
     */
    async loadHotVideoList() {
      const { data: res } = await getHotVideoList({
        page: this.page,
        size: this.size,
      });
      // 判断是否为第一页数据
      if (this.page === 1) {
        this.videoList = res.list;
      } else {
        this.videoList = [...this.videoList, ...res.list];
      }
    },
    // 4. 实现回调方法
    /**
     * List 组件的首次加载
     */
    async mescrollInit() {
      await this.loadHotVideoList();
      this.isInit = false;
      // 结束 上拉加载 && 下拉刷新
      this.mescroll && this.mescroll.endSuccess();
    },
    /**
     * 下拉刷新的回调
     */
    async downCallback() {
      if (this.isInit) return;
      this.page = 1;
      await this.loadHotVideoList();
      // 结束 上拉加载 && 下拉刷新
      this.mescroll && this.mescroll.endSuccess();
    },
    /**
     * 上拉加载的回调
     */
    async upCallback() {
      if (this.isInit) return;
      this.page += 1;
      await this.loadHotVideoList();
      // 结束 上拉加载 && 下拉刷新
      this.mescroll && this.mescroll.endSuccess();
    },
    /**
     * item 点击事件
     */
    onItemClick(data) {
      // 保存当前点击的 video 数据到 vuex
      this.setVideoData(data);
      // 进行页面跳转
      uni.navigateTo({
        url: `/subpkg/pages/video-detail/video-detail`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.hot-video-container {
  background-color: $uni-bg-color-grey;
}
</style>
