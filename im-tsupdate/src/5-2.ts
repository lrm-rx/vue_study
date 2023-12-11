export class Vechile {
  static count: number = 3
  public brand: string // 品牌
  public vechileNo: string // 车牌号
  public days: number // 租赁天数
  public total: number = 0 // 支付的租赁总费用
  constructor(brand_: string, vechileNo_: string, days_: number) {
    this.brand = brand_
    this.vechileNo = vechileNo_
    this.days = days_
  }

  public calculateRent() {
    console.log(this.brand + " 车牌号为:" + this.vechileNo + "开始被租")
    return 0
  }
}

class Car extends Vechile {
  public type: string // 车的型号
  constructor(brand_: string, vechileNo_: string, days_: number, type_: string) {
    super(brand_, vechileNo_, days_)
    this.type = type_
  }
  // 根据车的型号来获取租车一天的费用
  public getPriceByType() {
    let rentMoneyByDay: number = 0 // 每天的租金
    if (this.type === "型号1") {
      rentMoneyByDay = 300
    } else if (this.type === "型号2") {
      rentMoneyByDay = 500
    } else if (this.type === "型号3") {
      rentMoneyByDay = 800
    }
    return rentMoneyByDay
  }

  public calculateRent() {
    super.calculateRent()
    console.log("小轿车租赁")
    return this.days * this.getPriceByType()
  }
}

class Bus extends Vechile {
  public seatNum: number // 座位数
  constructor(brand_: string, vechileNo_: string, days_: number, seatNum: number) {
    super(brand_, vechileNo_, days_)
    this.seatNum = seatNum
  }
  public getPriceBySeatNum() {
    let rentMoneyByDay: number = 0 // 每天的租金
    if (this.seatNum <= 18) {
      rentMoneyByDay = 900
    } else if (this.seatNum > 18) {
      rentMoneyByDay = 4500
    }
    return rentMoneyByDay
  }
  public calculateRent() {
    super.calculateRent()
    console.log("公共汽车租赁")
    return this.days * this.getPriceBySeatNum()
  }
}

class Customer {
  rent(vechile: Vechile) {
    let car = vechile as Car
    car.type
    vechile.calculateRent()
  }
}

let cust: Customer = new Customer()
let car: Car = new Car("ABC", "lucky", 29, "dog")
cust.rent(car)

export { }