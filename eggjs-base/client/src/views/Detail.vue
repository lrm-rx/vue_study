<template>
  <div class="detail">
    <div class="title">{{ detail.title }}</div>
    <div class="summary">{{ detail.summary }}</div>
    <div class="content">{{ detail.content }}</div>
    <div class="create-time">{{ detail.createTime }}</div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      detail: {
        id: 2,
        title: "Flutter从入门到进阶 实战携程网App",
        img: "https://img-blog.csdnimg.cn/img_convert/515728166f8ca2fb0c20806158161f28.png",
        summary: "从入门到进阶带你快速解锁 FLutter 新版热门技术",
        content: "从入门到进阶带你快速解锁 Flutter 新版热门技术，体系化讲解+真实项目高仿，系统掌 Flutter 实战技术与技巧。无论是新人还是老手。都能让你的 Flutter 技术能力和项目经验得到前所未有的提升!",
        createTime: "2019-10-10 10:20:20"
      }
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
