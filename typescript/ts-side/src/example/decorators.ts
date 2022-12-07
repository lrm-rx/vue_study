// function setProp(target) {
//   return function(target) {
//     // ...
//   }
// }
// function setName() {
//   console.log('get setName');
//   return (target) => {
//     console.log('setName');
//   }
// }

// function setAge() {
//   console.log('get setAge');
//   return (target) => {
//     console.log('setAge');
//   }
// }
// @setName()
// @setAge()
// class ClassDec {

// }

// let sign = null
// function setName(name: string) {
//   return (target: new() => any) => {
//     sign = target
//     console.log(target.name);
//   }
// }
// @setName('ming')
// class ClassDec {
//   constructor() {}
// }
// console.log(sign === ClassDec)
// console.log(sign === ClassDec.prototype.constructor);

// function addName(constructor: new() => any) {
//   constructor.prototype.name = 'ming'
// }

// @addName

// class ClassD {}
// interface ClassD {
//   name: string
// }
// const d = new ClassD()
// console.log(d.name);

// function classDecorator<T extends {new(...args: any[]): {}}>(target: T) {
//   return class extends target {
//     newProperty = 'new property'
//     hello = 'override'
//   }
// }

// class Greeter {
//   public property = 'property'
//   public hello: string
//   constructor(m: string) {
//     this.hello = m
//   }
// }
// console.log(new Greeter('world'));

// configurable
// writable
// enumerable
// let obj12 = {}
// Object.defineProperty(obj12, 'name', {
//   value: 'ming',
//   writable: false,
//   configurable: true,
//   enumerable: true
// })
// console.log(obj12.name);
// obj12.name = 'test'
// console.log(obj12.name);\
// for(const key in obj12) {
//   console.log(key);
// }

// function enumerable(bool: boolean) {
//   return (target: any, propertyName: string, descriptor: PropertyDecorator) => {
//     console.log(target);
//     descriptor.enumerable = bool
//   }
// }

// class ClassF {
//   constructor(public age: number) {}
//   @enumerable(false)
//   public getAge() {
//     return this.age
//   }
// }
// const classF = new ClassF(18)
// console.log(classF);

// for(const key in classF) {
//   console.log(key);
// }










