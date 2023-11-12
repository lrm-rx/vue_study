<template>
  <div>
    <!-- 电梯导航 -->
    <ul>
      <li v-for="(navItem, index) in navItems" :key="index" :class="{ active: activeIndex === index }">
        <a @click="scrollToSection(navItem.id)">{{ navItem.title }}</a>
      </li>
    </ul>

    <!-- 内容部分 -->
    <div v-for="section in navItems" :key="section.id" :id="section.id" class="section">
      <h2>{{ section.title }}</h2>
      <!-- section content -->
      <div v-if="section.id === 'section3'">111</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navItems: [
        { id: 'section1', title: 'Section 1' },
        { id: 'section2', title: 'Section 2' },
        { id: 'section3', title: 'Section 3' }
      ],
      activeIndex: 0 // 当前活动的导航项索引
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.activeIndex = this.navItems.findIndex(section => {
        const targetElement = document.getElementById(section.id)
        return targetElement.offsetTop <= scrollPosition && targetElement.offsetTop + targetElement.offsetHeight > scrollPosition
      })
    },
    scrollToSection (sectionId) {
      const targetElement = document.getElementById(sectionId)
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style>
.section {
  height: 500px;
  margin-bottom: 20px;
}

ul {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  background-color: lightgray;
  padding: 10px;
}

li {
  list-style-type: none;
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: #333;
}

.active a {
  color: red;
}
</style>
