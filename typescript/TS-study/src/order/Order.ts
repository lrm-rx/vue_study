import OrderDetail from './OrderDetail'
class Order {
  // public orderId: number = 0;
  // public date: Date = new Date();
  // public custname: string = 'ming';
  // public phone: string = '1111'

  // public orderDetail: OrderDetail[] = []
  // public orderDetail: Set = []
  // public orderDetailArray: Array<OrderDetail> = []

  /**
   * 给构造器的参数如果加上public, 这个参数就变成了一个属性,
   * 这种简洁写法是两步综合体: 
   * 第一步: 定义一个属性;
   * 第二步: 等于默认构造函数会给这个属性赋值[隐式操作]
   */

  constructor(public orderId: number, public date: Date, public custname: string, public phone: string, public orderDetailArray: Array<OrderDetail>) {
    // this.orderId = orderId;
    // this.date = date;
    // this.custname = custname;
    // this.phone = phone;
    // this.orderDetailArray = orderDetailArray;
  }
}
let orderDetail1 = new OrderDetail(10, '笔记本电脑', 5600, 3)
// let orderDetail2 = new OrderDetail(11, '电视机', 4000, 5)
let orderDetail3 = new OrderDetail(12, 'iphone 14 pro', 9900, 4)

let orderDetailArray: Array<OrderDetail> = [orderDetail1, orderDetail3]
let orderDate = new Date(2022, 12, 17, 5, 20, 0)
// let order = new Order(1, orderDate, '小明', '12345678910', orderDetailArray);

let order = new Order(1, orderDate, '小明', '12345678910', [orderDetail1, orderDetail3]);

console.log('order:', order);
