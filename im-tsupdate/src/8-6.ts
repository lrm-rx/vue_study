type TestExtract = Extract<string | number | boolean, string | number>
type Extract_<T> = Extract<T, object>

function cross<T, U>(obj1: Extract_<T>, obj2: Extract_<U>): T & U
function cross<T, U, Z>(obj1: Extract_<T>, obj2: Extract_<U>, obj3: Extract_<Z>): T & U & Z
function cross<T, U, Z>(obj1: Extract_<T>, obj2: Extract_<U>, obj3?: Extract_<Z>): T & U & Z {
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

const t1: T1 = { a: "aa", b: 22 }
const t2: T2 = { c: 1, d: "sa" }
const t3: T3 = { e: 1, f: "23" }
console.log(cross(t1, t2, t3))

export { }