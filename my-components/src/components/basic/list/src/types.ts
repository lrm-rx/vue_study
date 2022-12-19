// 列表的每一项
export interface IListItem {
  // 头像
  avatar?: string,
  // 标题
  title?: string,
  // 描述
  desc?: string,
  // 时间
  time?: string,
  // 标签内容
  tag?: string
  // 标签类型
  tagType?: '' | 'success' | 'info' | 'warning' | 'danger'
}

// 列表
export interface IListOptions {
  title: string,
  content: IListItem[]
}

// 操作选项
export interface IActionOptions {
  text: string,
  icon?: string
}