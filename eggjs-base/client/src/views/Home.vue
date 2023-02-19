<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item.id" @click="handleClick(item.id)">
        <div class="list">
          <div class="left">
            <img :src="item.img" alt="" />
          </div>
          <div class="right">
            <div class="title">标题: {{ item.title }}</div>
            <div class="create-time">时间: {{ item.createTime }}</div>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { List, Cell } from "vant"
export default {
  components: {
    [List.name]: List,
    [Cell.name]: Cell
  },
  props: {},
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    }
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        this.loading = true;
        this.finished = true;
        this.list = [
          {
            id: 1,
            title: "编程必备基础知识 计算机组成原理+操作系统+计算机网络",
            img: "https://midpf-material.cdn.bcebos.com/01e13342d4f26fde96d4742db2ab3029.jpeg",
            summary: "介绍编程必备基础知识",
            content: "快速、系统补足必备的计算机系统知识，更快更有趣、更贴近实际工作，让你更快地学到满足实际工作需要的知识，为以后的工作打下良好的基础",
            createTime: "2019-08-10 10:20:20"
          },
          {
            id: 2,
            title: "Flutter从入门到进阶 实战携程网App",
            img: "https://img-blog.csdnimg.cn/img_convert/515728166f8ca2fb0c20806158161f28.png",
            summary: "从入门到进阶带你快速解锁 FLutter 新版热门技术",
            content: "从入门到进阶带你快速解锁 Flutter 新版热门技术，体系化讲解+真实项目高仿，系统掌 Flutter 实战技术与技巧。无论是新人还是老手。都能让你的 Flutter 技术能力和项目经验得到前所未有的提升!",
            createTime: "2019-10-10 10:20:20"
          },
          {
            id: 3,
            title: "Python接口自动化测试框架实战 从设计到开发",
            img: "https://5b0988e595225.cdn.sohucs.com/images/20190509/9eb98d2a00f84b52aa90e91824e90435.jpeg",
            summary: "以实际工作为例，讲授前后端分离下的接口自动化测试工作",
            content: "以实际工作为例，讲授前后端分离下的接口自动化测试工作，在开发行业接口自动化测试必不可少，掌握自动化测试的工程师会变得越来越重要!全流程变战，快速积累项目经验。",
            createTime: "2019-10-10 10:20:20"
          },
        ]
      }, 3000);
    },
    handleClick(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: row;

  .left {
    img {
      width: 150px;
      height: 100px;
      border-radius: 10px;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px 0 10px 15px;

    .title {
      font-size: 18px;
    }

    .create-time {
      font-size: 16px;
      color: #9e9e9e;
    }
  }
}
</style>
