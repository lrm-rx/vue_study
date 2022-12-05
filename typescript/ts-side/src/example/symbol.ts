// const s = Symbol() // 独一无二的
// console.log(s);

const s2 = Symbol('ming')
console.log(s2.toString());
console.log(Boolean(s2));

let prop = 'uname'
const info = {
  // uname: 'ming'
  [prop]: 'ming'
}
console.log(info);

const s5 = Symbol('name')
const info2 = {
  [s5]: 'ming', // 不能被遍历出来
  age: 18,
  sex: 1
}

console.log(info2);
info2[s5] = 'xiaohu'
console.log(info2);
// info2.s5 = 'letme'

for (const key in info2) {
  console.log(key);
}

// [s5]: 'ming', 不能获取到该值
console.log(Object.keys(info2));
console.log(Object.getOwnPropertyNames(info2));
console.log(JSON.stringify(info2));

// 获取Symbol值
console.log(Object.getOwnPropertySymbols(info2));
console.log(Reflect.ownKeys(info2));

// Symbol.for() 和 Symbol.keyFor()值
const s6 = Symbol('ning')
const s7 = Symbol('ning')

const s8 = Symbol.for('ning')
const s9 = Symbol.for('ning')
// s8 === s9 返回true
console.log('--------------0');

// instanceof
const obj1 = {
  [Symbol.hasInstance](otherObj) {
    console.log(otherObj);
  }
}

console.log({ a: 'b' } instanceof <any>obj1);

let arr = [1, 2]
console.log([].concat(arr, [3, 4]));
console.log(arr[Symbol.isConcatSpreadable]);
arr[Symbol.isConcatSpreadable] = false
console.log([].concat(arr, [3, 4]));
console.log(arr[Symbol.isConcatSpreadable]);

console.log('----------------------');

class C extends Array {
  constructor(...args) {
    super(...args)
  }
  static get [Symbol.species]() {
    return Array
  }
  getName() {
    return 'ming'
  }
}

const c = new C(1, 2, 3)
const a = c.map(item => item + 1)
console.log(a);
console.log(a instanceof C); // false
console.log(a instanceof Array);

let obj3 = {
  [Symbol.match](str) {
    console.log(str.length);
  },
  [Symbol.split](str) {
    console.log('split', str.length);
  }
}

'abcde'.match(<RegExp>obj3)

/**
 * Symbol.replace
 * Symbol.search
 * Symbol.split
 */
'abcde'.split(<any>obj3)

let obj4: unknown = {
  [Symbol.toPrimitive](type) {
    console.log(type);
  }
}
// const res = (obj4 as number)++
// const res = `abc${obj4}`

let obj5 = {
  [Symbol.toStringTag]() {
    return 'ming'
  }
}

// console.log(obj5.toString());

const obj6 = {
  a: 'a',
  b: 'b'
}


