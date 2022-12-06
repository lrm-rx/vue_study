interface InfoInter {
  name: string;
  getRes(input: string): number
}

interface InfoInter {
  age: number;
  name: string;
  getRes(input: number): string
}
// 接口合并, 函数重载
let infoInter: InfoInter 
infoInter = {
  name: 'ming',
  age: 18,
  getRes(text: any): any {
    if(typeof text === 'string') {
      return text.length
    }else{
      return String(text)
    }
  }
}

// console.log(infoInter.getRes('123'));
// namespace Validations {
//   export const numberReg = /^[0-9]+$/
//   export const checkNumber = () => {}
// }
// namespace Validations {
//   console.log(numberReg); // 导出才可以访问
//   export const checkLetter = () => {}
// }

// 等同于
// namespace Validations {
//   export const checkNumber = () => {}
//   export const checkLetter = () => {}
// }

// 同名的类要定义在同名的命名空间之前
// class Validations {
//   constructor() {}
//   public checkType() {}
// }
// namespace Validations {
//   export const numberReg = /^[0-9]+$/
// }
// console.log(Validations.numberReg);

function countUp() {
  countUp.count++
}
namespace countUp {
  export let count = 0
}
// console.log(countUp.count);
// countUp()
// console.log(countUp.count);
// countUp()
// console.log(countUp.count);

enum Colors {
  red,
  green,
  blue
}

namespace Colors {
  export const yellow = 3
}
console.log(Colors);




