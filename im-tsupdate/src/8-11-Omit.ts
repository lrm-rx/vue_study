// Omit 主要用于排除 type 类型, 接口, 类中需要的属性组成一个新的对象类型
interface Todo {
  title: string
  completed: boolean
  description: string
}

// type Omit<T, K extends keyof T> = {
//   [P in keyof T as P extends K ? never : P]: T[P]
// }

type Omit<T, K extends keyof T> = {
  [P in keyof T as Exclude<P, K>]: T[P]
}

type MyOmit = Omit<Todo, "completed">

export { } 