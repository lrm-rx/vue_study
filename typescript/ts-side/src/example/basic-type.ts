// 布尔类型
// let bool: boolean = false;
let bool: boolean
bool = true
// bool = 18

// 数值类型
let num: number = 18
// num = 'abcd'
num = 0b111
num = 0o123
num = 0x7a

// 字符串类型
let str: string;
str = 'aaa'
str = `值为${num}`
console.log(str);

// 数组类型
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [4, 5, 6]

let arr3: (string | number)[] = [7, 'a']

// 元组类型
let tuple: [string, boolean, number] = ['a', true, 18]

// 枚举类型
enum Roles {
  SUPER_ADMIN,
  ADMIN,
  USER
}

console.log(Roles.USER);

// any类型
let value: any;
value = 'adc';
value = 123;
value = false
const arr4: any[] = [1, 'adc']

// void类型
const consoleText = (text: string): void => {
  console.log(text);
}

let v: void
v = undefined
// v = null
console.log('abc');

// null和undefined
let u: undefined
u = undefined
// u = 123
let n: null
n = null
// n = 'abc'

// num = undefined
// num = null

// never类型
const errorFn = (message: string): never => {
  throw new Error(message)
}

const infiniteFn = (): never => {
  while(true) {}
}

let neverVariable = (() => {
  while (true) {}
})()

num = neverVariable

// object
let obj = {
  uname: 'ming'
}

let obj2 = obj;
obj2.uname = 'liang'
console.log(obj);

function getObject(obj:object): void {
  console.log(obj);
}

getObject(obj2)

// 类型断言
const getLength = (target: string | number): number => {
  if((<string>target).length || (target as string)) {
    return (<string>target).length
  }else{
    return target.toString().length
  }
}

getLength('abcssdf')