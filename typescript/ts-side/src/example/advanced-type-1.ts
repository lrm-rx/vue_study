// const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
//   let res = {} as T & U
//   res = Object.assign(arg1, arg2)
//   return res
// }
// mergeFunc({a: 'a'}, {b: 'b'})

// const getLengthFn = (content: string | number): number => {
//   if(typeof content === 'string'){
//     return content.length
//   }else{
//     return content.toString().length
//   }
// }

// console.log(getLengthFn('abc'));

// const valList = [123, 'abc']
// const getRandomValue = () => {
//   const number = Math.random() * 10
//   if(number < 5) {
//     return valList[0]
//   }else{
//     return valList[1]
//   }
// }
// const item = getRandomValue()

// 类型保护
// function isString(value: number | string): value is string {
//   return typeof value === 'string'
// }

// if((item as string).length){
//   console.log((<string>item).length);
// }else{
//   console.log((item as number).toFixed());
// }

// if(isString(item)){
//   console.log(item.length);
// }else{
//   console.log(item.toFixed());
// }
// 只能是string/number/boolean/symbol中的一种
// if(typeof item === 'string'){
//   console.log(item.length);
// }else{
//   console.log(item.toFixed());
// }

// 类型保护
// class createByclass1 {
//   public age = 18
//   constructor(){}
// }

// class createByclass2 {
//   public name = 'ning'
//   constructor(){}
// }

// function getRandomItem(){
//   return Math.random() < 0.5 ? new createByclass1() : new createByclass2
// }
// const item1 =  getRandomItem()
// if(item1 instanceof createByclass1) {
//   console.log(item1.age);
// }else{
//   console.log(item1.name);
// }

// null/undefined
let values = '123'
values = undefined

// string | undefined / string | null / string | undefined | null
const sumFn = (x: number, y?: number) => {
  return x + (y || 0)
}

const getLenFn = (value: string | null): number => {
  // if(value === null) {
  //   return 0
  // }else{
  //   return value.length
  // }
  return (value || '').length
}

function getSpliceStr(num: number | null): string {
  function getRes(prefix: string) {
    return prefix + num!.toFixed().toString()
  }
  num = num || 0.1
  return getRes('ning-')
}
console.log(getSpliceStr(5.20));

type TypeString = string
let str2: string
type PositionType<T> = { x: T, y: T }
const position1: PositionType<number> = {
  x: 1,
  y: -9
}
const position2: PositionType<string> = {
  x: 'top',
  y: 'left'
}

// 嵌套用法
type Childs<T> = {
  current: T,
  child?: Childs<T>
}
let aaa: Childs<string> = {
  current: 'first',
  child: {
    current: 'second',
    child: {
      current: 'third'
    }
  }
}

// type Childs = Childs[] // error

type Alias = {
  num: number
}

interface Interface {
  num: number
}

let _alias: Alias = {
  num: 123
}

let _interface: Interface = {
  num: 321
}

_alias = _interface // 类型兼容

// 字面量类型
type Name = 'ming'
const name11: Name = 'ming'

type Direction = 'north' | 'east' | 'south' | 'west'
function getDirectionFirstLetter(direction: Direction) {
  return direction.substring(0, 1)
}
console.log('getDirectionFirstLetter', getDirectionFirstLetter('north'));

type Age = 22
interface InfoInterface {
  name: string
  age: Age
}
const _info: InfoInterface = {
  name: 'ming',
  age: 22
}

/**
 * 可辨识联合两要素
 * 1. 具有普通的单例类型属性
 * 2. 一个类型别名包含了哪些类型的联合
 */

interface Square {
  kind: 'square'
  size: number
}

interface Rectangle {
  kind: 'rectangle'
  height: number
  width: number
}

interface Circle {
  kind: 'circle'
  redius: number
}
function assertNever(value: never): never {
  throw new Error('Unexpected object:' + value)
}
type Shape = Square | Rectangle | Circle
function getArea(s: Shape): number {
  let area!:number
  switch (s.kind) {
    case 'square':
      area = s.size * s.size;
      break;
    case 'rectangle':
      area = s.height * s.width;
      break;
    case 'circle':
      area = Math.PI * s.redius ** 2;
      break;
    default:
      return assertNever(s)
  }
  return area
}
getArea({kind: 'rectangle', width: 2, height: 6})



