// class Point {
//   public x: number
//   public y: number
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
//   public getPostion() {
//     return `(${this.x}, ${this.y})`
//   }
// }

// const point = new Point(1, 2)
// console.log(point);

// class Parent {
//   public name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// class Child extends Parent {
//   constructor(name: string) {
//     super(name)
//   }
// }

// public 公共 默认为public

// private 私有的
/**
 * public 公共 默认为public
 * private 私有的
 * protected 受保护的
 */
// class Parent {
//   // private age: number
//   protected age: number
//   // protected constructor(age: number){ // 只能通过子类创建实例
//   constructor(age: number) {
//     this.age = age
//   }
//   protected getAge() {
//     return this.age
//   }
// }
// const p = new Parent(19)
// // console.log(p.age);
// // console.log(Parent.age);

// class Child extends Parent {
//   constructor(age: number) {
//     super(age)
//     // console.log(Parent.age); // 无法访问属性
//     // console.log(super.getAge()); // 可以调用方法
//   }
// }

// const child = new Child(13)

// class UserInfo {
//   public readonly name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }
// const userInfo = new UserInfo('ning')
// console.log(userInfo);
// userInfo.name = 'ming'

// class L {
//   constructor(public name: string) {}
//   // 等价于
//   // constructor(name: string) {
//   //   this.name = name
//   // }
// }
// const l1 = new L('ming')
// console.log(l1.name);

// class Parent {
//   public static getAge() {
//     return Parent.age
//   }
//   private static age: number = 18
//   constructor(){}
// }
// const p = new Parent()
// // console.log(p.age);
// // console.log(Parent.age);

// class Info {
//   public name: string 
//   public age?: number
//   private _infoStr: string
//   constructor(name: string, age?: number, public sex?: string) {
//     this.name = name
//     this.age = age
//   }
//   get infoStr() {
//     return this._infoStr
//   }
//   set infoStr(value){
//     console.log(`setter: ${value}`);
//     this._infoStr = value
//   }
// }

// const info1 = new Info('ming')
// console.log(info1);
// const info20 = new Info('xiaohu', 18)
// const info21 = new Info('uzi', 18, '男')
// info21.infoStr = 'ming: 23'
// console.log(info21.infoStr);

// // 抽象类
// abstract class People {
//   constructor(public name: string) {}
//   public abstract printName(): void
// }
// // const p1 = new People() // 抽象类不能实例化
// class Man extends People {
//   constructor(name: string) {
//     super(name)
//     this.name = name
//   }
//   printName() {
//     console.log(this.name);
//   }
// }

// const m = new Man('letme')
// m.printName()

// abstract class People {
//   public abstract _name: string 
//   abstract get insideName(): string
//   abstract set insideName(value: string)
// }
// class P extends People {
//   public _name: string
//   public insideName: string
// }

class People {
  constructor(public name: string){}
}
let p2: People = new People('ming')
class Animal {
  constructor(public name: string) {}
}
p2 = new Animal('dog')

interface FoodInterface {
  type: string
}
class FoodClass implements FoodInterface {
  public type: string
}

class A {
  protected name: string
}
interface I extends A {}
class B extends A implements I {
  public name: string
}

const create = <T>(c: new() => T): T => {
  return new c()
}
class Infos {
  public age: number
}
create<Infos>(Infos)
// console.log(Infos);
