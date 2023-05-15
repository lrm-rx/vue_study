<template>
  <div id="app">
    <h1>父组件</h1>
    <h2>计数: {{ count }}</h2>
    <button @click="addOne">加1</button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addOne() {
      this.count += 1;
    },
  },
  beforeCreate() {
    console.log("父-beforeCreate");
  },
  created() {
    console.log("父-created");
  },
  beforeMount() {
    console.log("父-beforeMount");
  },
  mounted() {
    console.log("父-mounted");
  },
  beforeUpdate() {
    console.log("父-beforeUpdate");
  },
  updated() {
    console.log("父-updated");
  },
  beforeDestroy() {
    console.log("父-beforeDestroy");
  },
  destroyed() {
    console.log("父-destroyed");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
