// TS 泛型
interface Ref<T> {
  value: T
}

let ref: Ref<string> = {
  value: "123"
}

type Student = {
  name: string,
  age: number
}

let s: Ref<Student> = {
  value: {
    name: "ming",
    age: 19
  }
}
s.value.age
s.value.name

export { }