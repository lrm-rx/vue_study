class People {
  name: string
  _age: number = 0;
  addr: string
  static count: number = 20
  constructor(name: string, addr: string) {
    this.name = name;
    this.addr = addr;
  }
  set age(val: number) {
    if (val > 18) {
      this._age = val;
    } else {
      throw new Error("现在还不合适看电影!")
    }
  }
  get age() {
    return this._age;
  }
  doEat() { }
  doStep() { }
}

export { }