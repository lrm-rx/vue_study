type AppAttrToObj<T, K extends string, V> = {
  [P in keyof T | K]: P extends keyof T ? T[P] : V
}

interface Customer {
  name: string
  degree: number
  phone: string
}

type Test = AppAttrToObj<Customer, "wx", string>


export { }