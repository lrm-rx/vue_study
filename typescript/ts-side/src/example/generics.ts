// const getArray = <T>(value: T, times: number = 5): T[] => {
//   return new Array(times).fill(value)
// }

// getArray<number>(2, 3).map(item => item)

const getArray = <T, U>(param1: T, param2: U, times: number): Array<[T, U]> => {
  return new Array(times).fill([param1, param2])
}
getArray(1, 'd', 5).forEach(item => {
  console.log(item[0]);
  console.log(item[1]);
})

let getArr: <T>(arg: T, times: number) => T[]
getArr = (arg: any, times: number) => {
  return new Array(times).fill(arg)
}

// getArr(123, 5).map(item => item.length)

type GetArray = <T>(arg: T, times: number) => T[]
let getArray1: GetArray = (arg: any, times: number) => {
  return new Array(times).fill(arg)
}

interface IGetArray<T> {
  (arg: T, times: number): T[],
  array: T[]
}

interface ValueLength {
  length: number
}
const getArray2 = <T extends ValueLength>(arg: T, times): T[] => {
  return new Array(times).fill(arg)
}

getArray2([1, 2], 5)
// getArray2(154, 5)
getArray2('154', 5)
getArray2({
  length: 3
}, 5)

const getProps = <T, K extends keyof T>(object: T, propName: K) => {
  return object[propName]
}

const objs = {
  a: 'a',
  b: 'b'
}
getProps(objs, 'a')
// getProps(objs, 'c')
getProps(objs, 'b')