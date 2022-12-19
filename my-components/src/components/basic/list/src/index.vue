<template>
  <div class="rm-list-tabs__item">
    <el-tabs>
      <el-tab-pane :label="item.title" v-for="(item, index) in list" :key="index">
        <el-scrollbar max-height="300px">
          <div class="container" @click="clickItem(itemChildren, i)" v-for="(itemChildren, i) in item.content" :key="i">
            <!-- 头像 -->
            <div class="avatar" v-if="itemChildren.avatar">
              <el-avatar :src="itemChildren.avatar"></el-avatar>
            </div>
            <!-- 内容 -->
            <div class="content">
              <div v-if="itemChildren.title" class="title">
                <div class="rm-text-overflow-1">{{ itemChildren.title }}</div>
                <el-tag v-if="itemChildren.tag" size="small" :type="itemChildren.tagType">{{ itemChildren.tag
                }}</el-tag>
              </div>
              <!-- 超出2行显示... rm-text-overflow-2 -->
              <div class="desc rm-text-overflow-2" v-if="itemChildren.desc">{{ itemChildren.desc }}</div>
              <div class="time rm-text-overflow-2" v-if="itemChildren.time">{{ itemChildren.time }}</div>
            </div>
          </div>
        </el-scrollbar>
        <!-- footer -->
        <div class="actions">
          <div class="action-item" @click="clickAction(action, k)" :class="{ 'border': k !== actions.length }"
            v-for="(action, k) in actions" :key="k">
            <div class="action-icon" v-if="action.icon">
              <component :is="`el-icon-${toLine(action.icon)}`"></component>
            </div>
            <div class="a-text">{{ action.text }}</div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { IActionOptions, IListOptions, IListItem } from './types';
import { toLine } from '@/utils';
const props = defineProps({
  // 列表的内容
  list: {
    type: Array as PropType<IListOptions[]>,
    required: true
  },
  // 操作的内容
  actions: {
    type: Array as PropType<IActionOptions[]>,
    default: () => []
  }
})
const emits = defineEmits(['clickItem', 'clickAction'])
const clickItem = (item: IListItem, index: number) => {
  emits('clickItem', { item, index })
}
const clickAction = (item: IActionOptions, index: number) => {
  emits('clickAction', { item, index })
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: #e6f6ff;
  }

  .avatar {
    flex: 1;
  }

  .content {
    flex: 4;

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:first-child {
        max-width: 212px;
      }
    }

    .desc,
    .time {
      font-size: 12px;
      color: #999;
      margin-top: 4px;
    }
  }
}

.actions {
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;

  .action-item {
    height: 50px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .action-icon {
      margin-right: 4px;
      position: relative;
      top: 2px;

      svg {
        width: 1em;
        height: 1em;
      }
    }
  }
}
</style>