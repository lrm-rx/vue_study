type T1 = {
  a: string;
  b: number
}
type T2 = {
  c: number;
  d: string
}
function cross<T extends object, U extends object>(obj1: T, obj2: U): T & U
function cross<T extends object, U extends object, Z extends object>(obj1: T, obj2: U, obj3: Z): T & U & Z
function cross<T extends object, U extends object, Z extends object>(obj1: T, obj2: U, obj3?: Z): T & U & Z {
  const combine = {} as T & U & Z
  // for (const k in obj1) {
  //   if (Object.prototype.hasOwnProperty.call(obj1, k)) {
  //     (combine as any)[k] = obj1[k]
  //   }
  // }
  // for (const k in obj2) {
  //   if (Object.prototype.hasOwnProperty.call(obj2, k)) {
  //     (combine as any)[k] = obj2[k]
  //   }
  // }
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

let t1: T1 = {
  a: "xiaoming",
  b: 12
}

let t2: T2 = {
  c: 1,
  d: "abc"
}
cross(t1, t2)


export { }