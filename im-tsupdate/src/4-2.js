function Vechile(brandNo, price) {
  console.log("this:", this)
  // 父类
  this.brandNo = brandNo; // 品牌
  this.price = price; // 价格
}
Vechile.prototype.sale = function () {
  console.log(this + "销售");
}

// 继承
function Bus(brandNo, price, seatNo) {
  // 子类
  Vechile.call(this, brandNo, price);
  this.seatNo = seatNo;
}
// 原型链继承
Bus.prototype = new Vechile();
Bus.prototype.constructor = Bus;

function Car(brandNo, price, types) { // 子类
  Vechile.call(this, brandNo, price);
  this.types = types;
}

let bus = new Bus("大巴", 20, 30);
console.log(bus);
bus.sale();