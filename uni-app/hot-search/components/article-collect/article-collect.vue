<template>
  <view class="collect-box" @click="onClick">
    <image class="img" :src="getIsCollect" />
    <text class="txt">收藏</text>
  </view>
</template>

<script>
import { mapActions } from 'vuex';
import { userCollect } from 'api/user';
export default {
  name: 'article-collect',
  props: {
    /**
     * 数据源
     */
    articleData: {
      type: Object,
      required: true
    }
  },
  computed: {
    getIsCollect() {
      return this.articleData && this.articleData.isCollect
        ? '/static/images/collect.png'
        : '/static/images/un-collect.png';
    }
  },
  methods: {
    ...mapActions('user', ['isLogin']),
    async onClick() {
      // 进行登录判定，登录之后允许发布评论
      if (!(await this.isLogin())) {
        return;
      }
      // 展示加载框
      uni.showLoading({
        title: '加载中'
      });
      await userCollect({
        articleId: this.articleData.articleId,
        isCollect: !this.articleData.isCollect
      });
      // 关闭加载
      uni.hideLoading();
      // 更新数据
      this.$emit('changeCollect', !this.articleData.isCollect);
    }
  }
};
</script>

<style lang="scss" scoped>
.collect-box {
  display: flex;
  flex-direction: column;
  align-items: center;

  .img {
    width: $uni-img-size-base;
    height: $uni-img-size-base;
  }

  .txt {
    font-size: $uni-font-size-sm;
    color: $uni-text-color;
  }
}
</style>
