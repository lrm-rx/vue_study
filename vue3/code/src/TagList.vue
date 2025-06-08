<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div class="tags" :class="{ 'has-overflow': hasOverflow }">
      <span v-for="(tag, index) in tags" :key="index" class="tag">{{
        tag
      }}</span>
    </div>
    <div v-if="hasOverflow" class="toggle" @click="toggleExpand">
      {{ isExpanded ? "收起" : "展开" }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
});

const isExpanded = ref(false);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

const hasOverflow = computed(() => {
  const tagsContainer = document.querySelector(".tags");
  return tagsContainer
    ? tagsContainer.scrollWidth > tagsContainer.clientWidth
    : false;
});
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}

.title {
  margin-right: 20px;
  font-weight: bold;
}

.tags {
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
}

.tag {
  margin-right: 10px;
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 5px;
}

.has-overflow .tag {
  white-space: nowrap;
}

.toggle {
  margin-left: auto;
  cursor: pointer;
  color: blue;
}
</style>
