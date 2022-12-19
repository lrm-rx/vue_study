export interface IMenuItem {
  // 导航的图标
  icon?: string,
  // 处理之后的图标
  i?: any,
  // 名字
  name: string,
  // 索引
  index: string,
  // 子菜单
  children?: IMenuItem[]
}