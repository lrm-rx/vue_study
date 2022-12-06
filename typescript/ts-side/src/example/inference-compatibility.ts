// let name1 = 'ming'
// // name1 = 123

// let arr81 = [1, 'a']
// // arr81 = [2,'b', false]

// // window.onmousedown = (event) => {
// //   console.log(event.a);
// // }

// interface InfoInterface {
//   name: string
//   info: { age: number }
// }

// let infoa: InfoInterface
// const infos1 = { name: 'ning', info: { age: 20 } }
// const infos2 = { age: 17 }
// const infos3 = { name: 'ming', age: 19 }

// infoa = infos1
// // infoa = infos2
// // infoa = infos3

// // 参数个数
// // let x = (a: number) => 0
// // let y = (b: number, c: string) => 0
// // // y = x
// // // x = y
// // const arrs = [1, 2, 3]
// // arrs.forEach(item => {
// //   console.log(item);
// // })

// // 参数类型
// let x = (a: number) => 0
// let y = (b: string) => 0
// // x = y

// // 可选参数和剩余参数
// const getSum = (arr: number[], callback: (...args: number[]) => number):number => {
//   return callback(...arr)
// }

// const res = getSum([1, 2, 3], (...args: number[]): number => args.reduce((a, b) => a + b, 0))

// // console.log(res);
// const res1 = getSum([1, 2, 3], (arg1: number, arg2: number, arg3: number): number => arg1 + arg2 + arg3)
// // console.log(res1);

// // 函数参数双向协变
// let funcA = (arg: number | string): void => {}
// let funcB = (arg: number): void => {}
// funcA = funcB
// funcB = funcA

// // 返回值类型
// let xx = (): string | number => 0
// let yy = (): string => 'a'
// let zz = (): boolean => false
// xx = yy
// // yy = xx
// // yy = zz

// // 函数重载
// // 重载签名
// function merge(arg1: number, arg2: number): number
// function merge(arg1: string, arg2: string): string
// // 实现签名
// function merge(arg1: any, arg2: any) {
//   return arg1 + arg2
// }
// merge(1, 3)
// merge('a', 'b').length

// function sum(arg1: number, arg2: number): number
// function sum(arg1: any, arg2: any): any {
//   return arg1 + arg2
// }
// let func = merge
// // func = sum

// enum StatusEnum {
//   On,
//   Off
// }
// enum AnimalEnum {
//   Dog,
//   Cat
// }
// let s = StatusEnum.On
// s = 0
// // s = AnimalEnum.Dog

// class AnimalClass {
//   public static age: number
//   constructor(public name: string) {}
// }

// class PeopleClass {
//   public static age: string
//   constructor(public name: string){}
// }

// class FoodsClass {
//   constructor(public name: number) {}
// }
//  let animal: AnimalClass
//  let people: PeopleClass
//  let food: FoodsClass
//  animal = people
// //  animal = food

// private和protected
// class ParentClass {
//   private age: number
//   constructor() {}
// }
// class ChildrenClass extends ParentClass {
//   constructor() {
//     super()
//   }
// }
// class OtherClass {
//   private age: number
//   constructor() {}
// }
// const children: ParentClass = new ChildrenClass()
// const other: ParentCalss = new OtherClass()

interface Data<T> {
  data: T
}
let data1: Data<number>
let data2: Data<string>
// data1 = data2







