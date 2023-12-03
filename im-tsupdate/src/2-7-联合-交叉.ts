let data: Object = new Set<string>();

let data2: object = { age: 23 };

// 联合类型
let str: string | number = "adc";
str = 2

// 交叉类型
type Obj1 = { username: string };
let obj1 = { username: "ming" };
type Obj2 = { age: number }
let obj2: Obj2 = { age: 21 };

let obj3: Obj1 & Obj2 = { username: "ming", age: 23 }

// 字面量数据类型
// type num = 1 | 2 | 3;
// let n: num = 4;

// type A = number | string;
// let a: A = "WBG"
// type num = number;
// let n: num = 3;

type increaseFlag = 0 | 1;
function isStartUp(increase: increaseFlag) {
  if (increase) {
    console.log("open");
  } else {
    console.log("close");
  }
}

isStartUp(1)

export { }