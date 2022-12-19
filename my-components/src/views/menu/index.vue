<template>
  <div class="container">
    <div class="box">
      <rm-menu :data="data1" defaultActive="2"></rm-menu>
    </div>
    <div class="box">
      <rm-infinite-menu
        :data="data2"
        defaultActive="2"
        text-color="green"
      ></rm-infinite-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
const data1 = [
  {
    name: '导航1',
    index: '1',
    icon: 'Document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'Document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'Document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'Document',
      },
      {
        name: '导航3-2',
        index: '3-2',
        icon: 'Document',
      },
    ]
  }
]

const data2 = [
  {
    name: '导航1',
    index: '1',
    icon: 'Document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'Document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'Document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'Document',
        children: [
          {
            name: '导航3-1-1',
            index: '3-1-1',
            icon: 'Document',
            children: [
              {
                name: '导航3-1-1-1',
                index: '3-1-1-1',
                icon: 'Document',
              }
            ]
          }
        ]
      },
      {
        name: '导航3-2',
        index: '3-2',
        icon: 'Document',
      },
    ]
  }
]
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-around;
  .box {
    width: 200px;
  }
}
</style>