class Person {
  // ts4.0之前属性没有赋值的解决方法, 增加一个undefined数据类型
  // public name: string | undefined
  public name: string = 'ming'
  public age: number = 18
  public phone: string = '11111111111'

  // 对象变量 = 实例变量 = 类的非静态的属性
  constructor(name: string, age: number, phone: string){
    this.name = name
    this.age = age
    this.phone = phone
  }

  // function 类中不能这样定义方法
  public say(): number {
    return 3
  }
  public doSports(who: string, address: string): void { // 方法默认的返回值为void
    console.log(`${this.name}和${who}在${address}做运动`);
  }
}



// let xiaoming = new Person();
// // 给对象赋值的两种方法
// // 方法1: 通过类中属性或方法来赋值
// xiaoming.name = '小明'
// xiaoming.age = 18
// xiaoming.phone = '12345678910'

// xiaoming.doSports('小红', '学校操场')

// 方法2: 通过 构造函数 [构造器]来赋值
/**
 * 创建对象一共做了三件事情
 * 1. 在堆中为类的某个对象[实例]分配一个空间
 * 2. 调用对应的构造函数[构造器]
 *      new Person()自动匹配无参数的构造器
 * 3. 
 */
 let xiaoming = new Person('小明', 18, '12345678910');
