/**
 * 需求1：汽车租赁功能实现：有小轿车、大巴、卡车三种类型的车，顾客可以租任意一种或多种不同类型的车，按照租用的天数计算租金，同时为了响应国家对各类车安全的管理，对在租赁期内有过各种超载、超乘客数、酒后驾车等违规的车需要额外支付一定的费用。
 * 需求2：计算退回费用：最终退回顾客的费用为押金扣除使用天数，如押金不足需额外支付不足部分。
 * 思考小轿车、大巴、卡车共同属性：品牌（brand）vechileNo（车牌号）days（租赁天数）total（支付的租赁总费用）deposit（押金）
 * 思考小轿车、大巴、卡车共同计算方法：计算租赁车的价格（calculateRent）支付押金的方法（payDesposit）安全规则方法（safeShow）
 *
 * 父类：vechile 交通工具
 *
 * 子类：小轿车【型号】type属性
 */

class Vechile {
  public brand: string; // 品牌
  public vechileNo: string; // 车牌号
  public days: number; // 租赁天数
  public total!: number; // 支付的租赁总费用
  public deposit: number; // 押金
  constructor(brand: string, vechileNo: string, days: number, deposit: number) {
    this.brand = brand;
    this.vechileNo = vechileNo;
    this.days = days;
    this.deposit = deposit;
  }
  // 计算租赁车的价格
  public calculateRent(): number {
    return 0
  }
  // 支付押金的方法
  public payDesposit(): void {
    console.log(`${this.brand}车牌号为:${this.vechileNo}支付了: ${this.total}`);
  }
  // 安全检测方法
  public safeShow(): void {}
}

class Car extends Vechile {
  public type: string;
  constructor(brand: string, vechileNo: string, days: number, deposit: number, type: string) {
    super(brand, vechileNo, days, deposit)
    this.type = type;
  }
  // 计算租赁车的价格
  // 根据车的型号来获取租用一天的租金
  public getPriceByType(): number {
    // 每天的租金
    let rentMoneyByDay: number = 0;
    if(this.type === '普拉多巡航舰') {
      rentMoneyByDay = 1000;
    }else if(this.type === '威驰智行版') {
      rentMoneyByDay = 2000;
    }else if(this.type === '凯美瑞旗舰版') {
      rentMoneyByDay = 3000
    }
    return rentMoneyByDay;
  }
}

const car = new Car('凯美瑞', '桂K666', 5, 2000, '凯美瑞旗舰版')
console.log(car);
console.log(car.calculateRent());

export default Vechile;