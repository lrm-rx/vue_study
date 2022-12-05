// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Point.prototype.getPostion = function () {
//   return '(' + this.x + ', ' + this.y + ')'
// }
// var p1 = new Point(2, 3)
// // console.log(p1);
// // console.log(p1.getPostion());
// // var p2 = new Point(9, 8)
// // console.log(p2.getPostion());

// class Pointclass {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     // return {a: 'a'}
//   }
//   getPostion() {
//     return `(${this.x}, ${this.y})`
//   }
// }

// const p3 = new Pointclass(1, 2)
// // console.log(p3);
// // console.log(p3 instanceof Pointclass);
// // console.log(p3.hasOwnProperty('x'));
// // console.log(p3.hasOwnProperty('getPostion')); // false
// // console.log(p3.__proto__.hasOwnProperty('getPostion')); // true

// console.log('-----------------------------------------------------');
// var info = {
//   _age: 19,
//   set age(newVal) {
//     if (newVal > 18) {
//       console.log('变老了');
//     } else {
//       console.log('还好');
//     }
//   },
//   get age() {
//     console.log('???');
//     return this._age;
//   }
// }
// // console.log(info.age);
// // info.age = 17
// // info.age = 29

// class Infomation {
//  constructor(age){
//   this._age = age
//  }
//  set age(newAge) {
//   console.log('new age is:' + newAge);
//   this._age = newAge;
//  }
//  get age() {
//   return this._age;
//  }
// }
// const infomation = new Infomation(18)
// // infomation.age = 17
// // console.log(infomation.age);

// // const func = function(){}
// // function func(){}

// // class Infos {
// //   constructor(){}
// // }

// // const infos = class d {
// //   constructor(){}
// // }

// const infos = class {
//   constructor(){}
// }
// const testInfo = new infos()

// function testFn() {}
// console.log(testFn.name);

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   getPosition() {
//     return `(${this.x}, ${this.y})`
//   }
//   static getClassName() {
//     return Point.name
//   }
// }

// const p = new Point(2, 3)
// console.log(p.getPosition());
// console.log(Point.getClassName());

// class Point {
//   static y = 2
//   constructor(){
//     this.x = 0
//   }
// }
// const p = new Point()
// console.log(p.x);
// console.log(Point.y);

const _func2 = () => {}
class Point {
  func1(){
    _func2.call(this)
  }
}
const p = new Point()

class Parent {
  constructor(){
    if(new.target === Parent) {
      throw new Error('不能实例化')
    }
    // console.log(new.target);
  }
}

class Child extends Parent {
  constructor(){
    super()
  }
}

// const c = new Parent()
const c = new Child()


