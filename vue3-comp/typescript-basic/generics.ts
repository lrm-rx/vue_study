// 泛型
function echo<T>(arg: T): T {
  return arg
}

const str: string = "lrm"
const result = echo(str)

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const res2 = swap(["a", "b"])

function echoWidthArr<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

const arrs = echoWidthArr([2, 3, 4])

interface IWithLength {
  length: number
}

function echoWidthLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}

const str11 = echoWidthLength("str")
const obj = echoWidthLength({ length: 10 })
const arr2 = echoWidthLength([3, 4, 5])


class Queue<T> {
  private data: T[] = []
  push(item: T) {
    return this.data.push(item)
  }
  pop() {
    return this.data.shift()
  }
}

const queue = new Queue<number>()

queue.push(100)
const poped = queue.pop()

if (poped) {
  poped.toFixed()
}

interface KeyPair<T, U> {
  key: T,
  value: U
}

let kp1: KeyPair<number, string> = { key: 1, value: "lrm" }
let kp2: KeyPair<string, number> = { key: "lpl", value: 12 }

let arr: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]
export { }