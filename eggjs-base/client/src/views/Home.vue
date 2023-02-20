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
import moment from "moment";
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
      fetch("/article/lists")
        .then(res => res.json())
        .then(res => {
          if (res.status === 200) {
            this.loading = false;
            this.finished = true;
            this.list = res.data.map(item => {
              if (item.createTime) {
                item.createTime = moment(item.createTime).format("YYYY-MM-DD HH:mm:ss")
              }
              return item;
            });
          } else {
            this.$toast.fail(res.errorMsg)
          }
        })
    },
    handleClick(id) {
      this.$router.push({
        path: "/detail/" + id,
        // query: {
        //   id
        // }
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
