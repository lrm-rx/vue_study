<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  border: 0;
  outline: none;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
}

body {
  margin: auto;
  min-width: 1200px;
  background: #f4f6f9;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.ralative {
  position: relative;
}

.fixed {
  position: absolute;
}

.fixed {
  position: fixed;
}</style>
