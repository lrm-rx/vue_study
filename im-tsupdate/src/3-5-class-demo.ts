class People {
  name: string
  age: number
  addr: string
  static count: number = 10
  constructor(_name: string, _age: number, _addr: string) {
    this.name = _name;
    this.age = _age;
    this.addr = _addr;
  }
  doEat(who: string, where: string) {
    console.log(`who: ${who}, where: ${where}`);
  }
  doSport() { }
}

class StringUtil {
  static trimSpace(str: string) {
    return str.replace(/\s+/g, "")
  }
}

const dataProp1 = Object.getOwnPropertyDescriptor(People.prototype, "doEat")
// const dataProp2 = Object.getOwnPropertyDescriptor(People.prototype, "doEat")
// console.log("dataProp1:", dataProp1);
// console.log(dataProp1 === dataProp2);

const targetMethod = dataProp1!.value;
dataProp1!.value = function (...args: any[]) {
  args = args.map(arg => {
    if (typeof arg === "string") return StringUtil.trimSpace(arg);
    return arg;
  })
  console.log("前置拦截...");
  targetMethod.apply(this, args);
  console.log("后置拦截...");
}
Object.defineProperty(People.prototype, "doEat", dataProp1!)
// dataProp1?.value("xiaoming", "容县")
let p = new People("uzi", 23, "武  汉")
p.doEat("jack   yLove", "三   亚")

export { }