class People {
  name: string;  // ! 和 ?
  age: number;
  addr: string;
  constructor(name: string, age: number, addr: string) {
    this.name = name;
    this.age = age;
    this.addr = addr;
  }
  doEat() { }
  doSport() { }
}



class People1 {
  constructor(public name: string, public age: number, public addr: string) { }
}
// 静态成员(静态属性 + 方法)
export { }