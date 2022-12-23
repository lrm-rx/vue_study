export interface TableOptions {
  lable: string, // 表头
  prop: string, // 字段名称
  width?: string | number, // 宽度
  align?: 'left' | 'center' | 'right', // 对齐方式
  slot?: string, // 自定义列表模板名称
  action?: boolean, // 是否代表操作项
  editcell?: boolean, // 是否是可编辑的单元格
}