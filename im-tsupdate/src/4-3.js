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

// 寄生组合继承
function protoExtendsWithMdl(ParentClass, SonClass) {
  function Middle() {
    this.constructor = SonClass;
  }
  Middle.prototype = ParentClass.prototype;
  SonClass.prototype = new Middle();
}

protoExtendsWithMdl(Vechile, Bus)

let bus = new Bus("大巴", 20, 30);
console.log(bus);
bus.sale();