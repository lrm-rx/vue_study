<template>
  <div>
    <!-- <rm-notification :value="20"></rm-notification>
    <br>
    <br>
    <rm-notification isDot></rm-notification>
    <br>
    <br>
    <rm-notification :value="200" :max="99"></rm-notification>
    <br>
    <br>
    <rm-notification icon="ChatDotSquare" :value="200" :max="99"></rm-notification> -->

    <rm-notification :value="20">
      <template #default>
        <rm-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></rm-list>
      </template>
    </rm-notification>
  </div>
</template>

<script setup lang="ts">
import { list, actions } from './data'
import { IActionOptions, IListItem } from '@/components/list/src/types';
export interface IReturnDataType {
  index: Number,
  item: IActionOptions | IListItem
}
const clickItem = (data: IReturnDataType) => {
  console.log(data)
}
const clickAction = (data: IReturnDataType) => {
  console.log(data);
}
</script>

<style lang="scss" scoped>

</style>