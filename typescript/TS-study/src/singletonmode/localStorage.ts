/**
 * 单例设计模式
 *    第一步: 把构造器设置为私有的, 不允许外部创建类的实例[对象]
 *    第二步: 至少应该提供一个外部访问的方法或属性,外部可以通过这个方法或属性得到一个构造器实例
 *            所以应该把这个方法设置为静态方法
 *    第三步: 外部调用第二步提供的静态方法来获取一个对象
 */

/**
 * 提供一个外部访问的方法,通过这个方法用来提供外部得到一个对象的方法
 * 
 * 1. 带static关键字的方法就是一个静态方法
 * 2. 静态方法和对象无关, 外部的对象变量不能调用静态方法和静态属性
 * 3. 外部可以通过类名来调用
 * 
 * 静态方法不可以访问实例属性或实例方法[对象属性或对象方法]
 */

class MyLocalstorage {
  // 静态属性和对象属性是类中两大成员
  private static instace: MyLocalstorage; // 静态引用属性, 只能通过类去访问
  private constructor(public name: string) {}
  public setItem(key: string, value: any):void {
    localStorage.setItem(key, JSON.stringify(value))
  }

  public getItem(key: string): any {
    const value = localStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  }

  public static getInstance(name: string) {
    if(!MyLocalstorage.instace) {
      MyLocalstorage.instace = new MyLocalstorage(name);
    }
    return MyLocalstorage.instace
  }
}

export default MyLocalstorage