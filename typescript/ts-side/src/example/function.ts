function addNum(n1: number, n2: number): number {
  return n1 + n2
}

const addNum1 = (n1: number, n2: number) => n1 + n2

let addNum2: (x: number, y: number) => number
addNum2 = (n1: number, n2: number): number => n1 + n2
addNum2 = (n1: number, n2: number) => n1 + n2

type add1 = (x: number, y: number) => number
let addfunc: add1
addfunc = (arg1: number, arg2: number) => arg1 + arg2

type addFunction = (x1: number, x2: number, x3: number) => number
let addFun: addFunction
addFun = (x: number, y: number) => x + y
addFun = (x: number, y: number, z: number) => x + y + z

// const handleData = (arg1: number, ...args: number[]) => {}

function handleData(x: string): string[]
function handleData(x: number): number[]
function handleData(x: any): any {
  if(typeof x === 'string') {
    return x.split('')
  }else{
    return x.toString().split('').map(item => Number(item))
  }
}

console.log(handleData('abc'));
console.log(handleData(123));




