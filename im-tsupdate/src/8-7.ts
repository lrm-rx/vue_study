type TestExclude = Exclude<string | number | boolean, string | number>
type TestExtract = Extract<string | number | boolean, string | number>
type Extract_<T> = Extract<T, object>

type Exclude_<T> = Exclude<T, Array<any> | string | boolean>
function cross<T, U>(obj1: Exclude_<T>, obj2: Exclude_<U>): T & U
function cross<T, U, Z>(obj1: Exclude_<T>, obj2: Exclude_<U>, obj3: Exclude_<Z>): T & U & Z
function cross<T, U, Z>(obj1: Exclude_<T>, obj2: Exclude_<U>, obj3?: Exclude_<Z>): T & U & Z {
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

// const t1 = ["a", "b"]
const t1 = 3
const t2: T2 = { c: 1, d: "sa" }
const t3: T3 = { e: 1, f: "23" }
console.log(cross(t1, t2, t3))

export { }