export interface EventItem {
  title: string, // 事件标题
  start: string, // 开始时间
  end: string, // 结束时间
  editable?: boolean, // 是否可拖拽
}