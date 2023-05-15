<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>我是子组件- {{ count }}</h2>
    <button @click="increment">加2</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 2,
    };
  },
  methods: {
    increment() {
      this.count += 2;
    },
  },
  beforeCreate() {
    console.log("子-beforeCreate");
  },
  created() {
    console.log("子-created");
  },
  beforeMount() {
    console.log("子-beforeMount");
  },
  mounted() {
    console.log("子-mounted");
  },
  beforeUpdate() {
    console.log("子-beforeUpdate");
  },
  updated() {
    console.log("子-updated");
  },
  beforeDestroy() {
    console.log("子-beforeDestroy");
  },
  destroyed() {
    console.log("子-destroyed");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
