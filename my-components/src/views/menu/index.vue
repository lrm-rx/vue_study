<template>
  <div class="container">
    <!-- <rm-menu :data="data1" defaultActive="1"></rm-menu> -->
    <rm-infinite-menu :data="data2" defaultActive="1"></rm-infinite-menu>
  </div>
</template>

<script setup lang="ts">
const data1 = [
  {
    name: '导航1',
    index: '1',
    icon: 'document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'document',
      },
      {
        name: '导航3-2',
        index: '3-2',
        icon: 'document',
      },
    ]
  }
]

const data2 = [
  {
    name: '导航1',
    index: '1',
    icon: 'document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'document',
        children: [
          {
            name: '导航3-1-1',
            index: '3-1-1',
            icon: 'document',
            children: [
              {
                name: '导航3-1-1-1',
                index: '3-1-1-1',
                icon: 'document',
              }
            ]
          }
        ]
      },
      {
        name: '导航3-2',
        index: '3-2',
        icon: 'document',
      },
    ]
  }
]
</script>

<style lang="scss" scoped>
.container {
  width: 200px;
}
</style>