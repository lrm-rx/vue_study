interface Todo {
  title: string
  completed: boolean
  description: string
  add(): number
  del(): number
  upt(): number
}

// 1. 获取Todo函数
// type Degree<T> = {
//   [P in keyof T as T[P] extends Function?P:never]:T[P]
// }

// type DegreeTodo = Degree<Todo>

// 2. 
type Exc<T> = Exclude<T, Array<any>>
type Degree<T extends Record<string, any>> = { // 重映射
  [P in keyof Exc<T> as Exc<T>[P] extends Function?`do${Capitalize<P & string>}`:never]:Exc<T>[P]
}

type DegreeTodo = Degree<Todo>




type Convert<T> = T extends any ? T: never
type TestArrayKeys = Convert<keyof Array<any>>


export { } 