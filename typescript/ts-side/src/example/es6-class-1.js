function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.getPostion = function () {
  return '(' + this.x + ', ' + this.y + ')'
}
var p1 = new Point(2, 3)
// console.log(p1);
// console.log(p1.getPostion());
// var p2 = new Point(9, 8)
// console.log(p2.getPostion());

class Pointclass {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // return {a: 'a'}
  }
  getPostion(){
    return `(${this.x}, ${this.y})`
  }
}

const p3 = new Pointclass(1, 2)
// console.log(p3);
// console.log(p3 instanceof Pointclass);
// console.log(p3.hasOwnProperty('x'));
// console.log(p3.hasOwnProperty('getPostion')); // false
// console.log(p3.__proto__.hasOwnProperty('getPostion')); // true

console.log('-----------------------------------------------------');
var info = {
  _age: 19,
  set age(newVal) {
    if(newVal > 18) {
      console.log('变老了');
    }else{
      console.log('还好');
    }
  },
  get age(){
    console.log('???');
    return this._age;
  }
}
info.age

