/**
 * 构造器重载和函数重载使用基本相同,主要区别是: TS类构造器重载签名和实现签名都不需要管理返回值.
 * TS构造器是在对象创建出来之后,但是还没有给对象变量之前被执行,一般用来给对象属性赋值.
 * 
 * 我们知道在TS类中只能定义一个构造器,但实际应用时,TS类在创建对象时经常需要用到多个构造器的场景,
 * 比如:我们计算一个正方形对象,可以给构造器传递宽和高,也可以给构造器传递一个包含了宽和高的形状参数对象,
 * 这样需要用构造器重载来解决.
 * 
 * 构造器是方法吗?我们说对象调用的才是方法,但是TS构造器是在对象地址赋值给对象变量之前调用,而不是用来被对象变量调用
 * 的,所以构造器可以说成构造函数,但不能被看成是一个方法.
 * 
 * 计算正方形面积
 * 计算创建正方形对象, 可以给构造器传递宽和高
 * 也可以给构造器传递一个包含了宽和高的形状参数对象,这样需要用构造器重载.
 */

type type_ChartParam = {
  width?: number;
  height?: number;
  radius?: number;
}

class Square {
  public width: number;
  public height: number;
  constructor(width_: number, valueheight_: number);
  constructor(paramObj: type_ChartParam);
  constructor(paramObjOrWidth: any, height_: number = 0) {
    if(typeof paramObjOrWidth === 'number') {
      this.width = paramObjOrWidth;
      this.height = height_;
    }else{
      this.width = paramObjOrWidth.width;
      this.height = paramObjOrWidth.height;
    }
  }
  public getArea(): number {
    return this.width * this.height;
  }
}

let square = new Square(40, 50);
console.log(square.getArea());

let chartParamObj: type_ChartParam = {
  width: 100,
  height: 80
}

let square2 = new Square(chartParamObj)
console.log(square2.getArea());