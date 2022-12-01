/**
 * 1. 对现有的数组进行封装,让数组增删改变得更加好用
 * 2. 提供get方法 remove方法 显示方法[add方法]
 * 其中需求中的remove方法有两个,我们用方法重载来实现
 */

class ArrayList {
  // 第一步: 定义一个引用属性[数组]
  constructor(public element: Array<object>){

  }
  // 第二步: 根据索引来查询数组中指定元素
  get(index: number) {
    return this.element[index]
  }
  // 第三步: 显示方法
  show(){
    this.element.forEach((ele) => {
      console.log(ele);
    })
  }
}

let stuOne = {stuname: 'ming', age: 23}
let stuTwo = {stuname: 'xiaohu', age: 25}
let stuThree = {stuname: 'letme', age: 24}
let arr = new ArrayList([stuOne, stuTwo, stuThree]);

arr.show();
/**
 * 如果是根据数字去删除元素,remove方法返回的是一个数字
 * 如果是根据对象去删除元素,remove方法返回的是一个对象
 */

// let value = arr.remove(1)
