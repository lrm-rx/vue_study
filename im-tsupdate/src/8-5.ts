// 扁平模块化属性名
type Modules = {
  menu: {
    setActiveIndex: (index: string) => string
    setCollapse: (index: string) => string
  }

  tabs: {
    setEditableTabsValue: (editValue: string) => void
    setTabs: (index: string) => void
    setTabsList: (index: string) => void
  }
}

// 1. 模板字符类型
type MB<T, U> = `${T & string}/${U & string}`
// 2. 拿到父模块的属性名
type ModulesSpliceKeys<T> = {
  [Key in keyof T]: T[Key]
}
type TestModuleSpliceKeys = ModulesSpliceKeys<Modules>
// 3. 父, 子模块联合起来
type ModulesSpliceKeys_<T> = {
  [Key in keyof T]: MB<Key, keyof T[Key]>
}[keyof T]

type TestModuleSpliceKeys_ = ModulesSpliceKeys_<Modules>

export { }