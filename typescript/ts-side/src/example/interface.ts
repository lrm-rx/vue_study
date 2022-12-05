// const getFullName = ({firstName, lastName}) => {
//   return `${firstName} ${lastName}`
// }
// console.log(getFullName({
//   firstName: '123',
//   lastName: '543'
// }));
interface NameInfo {
  firstName: string,
  lastName: string
}
// const getFullName = ({firstName, lastName}: : {firstName: string, lastName: string}): string => {
const getFullName = ({ firstName, lastName }: NameInfo): string => {
  return `${firstName} ${lastName}`
}

getFullName({
  firstName: '123',
  lastName: 'abc'
})

interface Vegetable {
  color?: string,
  readonly type: string,
  [prop: string]: any
}
const getVegetables = ({color, type}: Vegetable) => {
  return `A ${color ? (color + ' ') : ''}${type}`
}

console.log(getVegetables({
  color: 'yellow',
  type: 'tomato',
  size: 2
}));

interface ArrInter {
  0: number,
  readonly 1: string
}

let arr8: ArrInter = [1, 'w']
// arr8[1] = 's'

type AddFn = (num1: number, num2: number) => number
const add: AddFn = (n1, n2) => n1 + n2

// interface RoleDic {
//   [id: number]: string
// }
// const role1: RoleDic = {
//   2: 'super_admin'
// }

interface RoleDic {
  [id: string]: string
}
const role2: RoleDic = {
  a: 'super_admin',
  1: 'admin' // 这里先转换成了字符串
}

// ------------------------------------------------

// 接口继承
interface Car {
  color: string
}

interface Suv extends Car {
  size: number
}

interface Mpv extends Car {
  height: number
}

const baoma: Suv = {
  size: 6,
  color: 'red'
}

const wlhg: Mpv = {
  height: 40,
  color: 'orange'
}

// --------------------------------
// 混合类型接口
interface Counter {
  (): void,
  count: number
}

const getCounter = (): Counter => {
  const c = () => {c.count++}
  c.count = 0
  return c
}

const counter: Counter = getCounter()
counter()
console.log(counter.count);
counter()
console.log(counter.count);
counter()
console.log(counter.count);




