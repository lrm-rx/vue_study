<template>
  <view class="praise-box" @click="onClick">
    <image class="img" :src="getIsPraise" />
    <text class="txt">点赞</text>
  </view>
</template>

<script>
import { mapActions } from 'vuex';
import { userPraise } from 'api/user';
export default {
  name: 'article-praise',
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
    getIsPraise() {
      return this.articleData && this.articleData.isPraise
        ? '/static/images/praise.png'
        : '/static/images/un-praise.png';
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
      await userPraise({
        articleId: this.articleData.articleId,
        isPraise: !this.articleData.isPraise
      });
      // 关闭加载
      uni.hideLoading();
      // 更新数据
      this.$emit('changePraise', !this.articleData.isPraise);
    }
  }
};
</script>

<style lang="scss" scoped>
.praise-box {
  display: flex;
  flex-direction: column;
  align-items: center;

  .img {
    width: $uni-img-size-base;
    height: $uni-img-size-base;
    color: $uni-text-color;
  }

  .txt {
    font-size: $uni-font-size-sm;
    color: $uni-text-color;
  }
}
</style>
