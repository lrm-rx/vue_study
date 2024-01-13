// 整体比较
type Test = string | number | boolean extends string | number ? string : never

// 逐个比较
type CondType<T> = T extends string | number ? T : never
type TestCondType = CondType<string | number | boolean>


type CrossType<T> = T extends object ? T : never
type T1 = {
  a: string;
  b: number
}
type T2 = {
  c: number;
  d: string
}
type T3 = {
  e: number;
  f: string;
}
function cross<T, U>(obj1: CrossType<T>, obj2: CrossType<U>): T & U
function cross<T, U, Z>(obj1: CrossType<T>, obj2: CrossType<U>, obj3: CrossType<Z>): T & U & Z
function cross<T, U, Z>(obj1: CrossType<T>, obj2: CrossType<U>, obj3?: CrossType<Z>): T & U & Z {
  const combine = {} as T & U & Z
  union(combine, obj1)
  union(combine, obj2)
  union(combine, obj3)
  return combine
}

function union(combine: any, curObj: any) {
  for (const k in curObj) {
    if (Object.prototype.hasOwnProperty.call(curObj, k)) {
      combine[k] = curObj[k]
    }
  }
  return combine
}

const t1: T1 = { a: "aa", b: 22 }
const t2: T2 = { c: 1, d: "sa" }
const t3: T3 = { e: 1, f: "23" }
console.log(cross(t1, t2, t3));

export { }