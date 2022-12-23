<template>
  <div>
    <rm-calendar :eventContent="eventContent" displayEventEnd :events="events" @eventClick="eventClick" @dateClick="dateClick"></rm-calendar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { EventItem } from '@/components/basic/calendar/src/types'
import { EventClickArg, EventContentArg } from '@fullcalendar/core';
import { DateClickArg } from '@fullcalendar/interaction';

const eventContent = (arg: EventContentArg) => {
        const el = document.createElement('div')
        const timeTextArr = arg.timeText.split(' - ')
        const start = timeTextArr[0]
        const end = timeTextArr[0]
        el.innerHTML = `
        <div>开始: ${start}</div>
        <div>结束: ${end}</div>
        <div>标题: ${arg.event._def.title}</div>
        `
        return {
          domNodes: [el]
        }
      }

const dateClick = (info: DateClickArg) => {
  events.value.push({
    title: '学习前端',
    start: info.dateStr + ' 12:00',
    end: info.dateStr + ' 18:00',
  })
  console.log(info);
}
const eventClick = (info: EventClickArg) => {
  console.log(info);
}
const events = ref<EventItem[]>([
  {
    title: '购物',
    start: '2022-12-23 08:30',
    end: '2022-12-23 12:30',
  },
  {
    title: '学习react',
    start: '2022-12-24 13:30',
    end: '2022-12-24 17:30',
  }
])
</script>

<style lang="scss" scoped>

</style>