class CommercialBank {
  public address: string = "shenzhen"
  public name: string = "ming"
  static count: number

  constructor(name: string, address: string) {
    this.address = address
    this.name = name
  }

  loan(): void {
    console.log(this.name + " 银行贷款");
  }
}

type ConstructorType = new (...args: any) => CommercialBank

interface ConstructorInter {
  new(...args: any): any
}

// 泛型工厂函数类型
function createFactoryConstructor(constructorType: new (...args: any) => any) {
  console.log(constructorType.name + "被创建了");
  new constructorType()
}

createFactoryConstructor(CommercialBank);

export { }