<template>
  <view class="comment-limt-container" v-if="!isShowAllComment">
    <view class="comment-title">精简评论</view>
    <block v-for="(item, index) in commentList.slice(0, 2)" :key="index">
      <!-- item 项组件 -->
      <article-comment-item :data="item.info" />
    </block>
    <view class="show-more" @click="$emit('moreClick')">查看更多评论</view>
  </view>
  <!-- 全部评论 -->
  <view class="comment-all-container" v-else>
    <!-- 当mescroll-body写在子组件时,父页面需引入mescroll-comp.js的mixins -->
    <mescroll-body
      ref="mescrollRef"
      @init="mescrollInit"
      @up="upCallback"
      :down="{
        use: false,
      }"
      :up="{
        textNoMore: '-- 我也是有底线的！ --',
      }"
    >
      <view class="comment-title">全部评论</view>
      <view class="list">
        <block v-for="(item, index) in commentList" :key="index">
          <article-comment-item :data="item.info" />
        </block>
      </view>
    </mescroll-body>
  </view>
</template>

<script>
import { getArticleCommentList } from "api/article";
export default {
  name: "article-comment-list",
  props: {
    // 文章 ID
    articleId: {
      type: String,
      required: true,
    },
    // 是否展示全部评论
    isShowAllComment: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // 当前页数
      page: 1,
      // 每页评论数
      pageSize: 5,
      // 评论列表
      commentList: [],
      // 评论总数
      commentListTotal: 0,
      // 是否为 init
      isInit: true,
      // 组件实例
      mescroll: null,
    };
  },
  created() {
    this.loadCommentList();
  },
  methods: {
    // 获取评论列表
    async loadCommentList() {
      const { data: res } = await getArticleCommentList({
        articleId: this.articleId,
        page: this.page,
        size: this.pageSize,
      });
      // 获取总数量
      this.commentListTotal = res.count;
      // 判断是否为第一页数据
      if (this.page === 1) {
        this.commentList = res.list;
      } else {
        this.commentList = [...this.commentList, ...res.list];
      }
    },
    // 首次加载
    async mescrollInit() {
      await this.loadCommentList();
      this.isInit = false;
      // 结束 上拉加载 && 下拉刷新
      this.getMescroll().endSuccess();
      // 判断数据是否加载完成
      this.mescroll.endBySize(this.commentList.length, this.commentListTotal);
    },
    // 上拉加载更多
    async upCallback() {
      if (this.isInit) return;
      this.page += 1;
      await this.loadCommentList();
      // 结束 上拉加载 && 下拉刷新
      this.getMescroll().endSuccess();
      // 判断数据是否加载完成
      this.mescroll.endBySize(this.commentList.length, this.commentListTotal);
    },
    // 返回 mescroll实例对象
    getMescroll() {
      if (!this.mescroll) {
        this.mescroll = this.$refs.mescrollRef.mescroll;
      }
      return this.mescroll;
    },
    // 为 comment 增加一个评论
    addCommentList(data) {
      console.log("datalist:", data);
      this.commentList.unshift(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.comment-title {
  font-weight: bold;
  color: $uni-text-color-title;
  font-size: $uni-font-size-lg;
  margin: $uni-spacing-col-lg 0;
}
.comment-limt-container {
  .show-more {
    margin: $uni-spacing-col-lg;
    text-align: center;
    color: $uni-text-color-more;
    font-size: $uni-font-size-base;
  }
}
</style>
