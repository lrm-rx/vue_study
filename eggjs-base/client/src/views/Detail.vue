<template>
  <div class="detail">
    <div class="title">{{ detail.title }}</div>
    <div class="summary">{{ detail.summary }}</div>
    <div class="content">{{ detail.content }}</div>
    <div class="create-time">{{ detail.createTime }}</div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {},
  data() {
    return {
      detail: {}
    }
  },
  created() {
    this.getArticleDetail();
  },
  methods: {
    getArticleDetail() {
      // query传参 this.$route.query
      fetch(`/article/detail/${this.$route.params.id}`)
        .then(res => res.json())
        .then(res => {
          if (res.status === 200) {
            this.detail = res.data;
            this.detail.createTime = res.data.createTime ? moment(res.data.createTime).format("YYYY-MM-DD HH:mm:ss") : undefined;
          } else {
            this.$toast.fail(res.errorMsg)
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  padding: 20px;
  text-align: left;

  .title {
    margin-bottom: 20px;
    font-size: 24px;
  }

  .summary {
    padding: 20px;
    background-color: #dcdcdc;
  }

  .content {
    padding: 20px 0;
    text-indent: 2em;
    text-align: justify;
    line-height: 200%;
  }

  .create-time {
    color: #9c9c9c;
    text-align: right;
  }
}
</style>
