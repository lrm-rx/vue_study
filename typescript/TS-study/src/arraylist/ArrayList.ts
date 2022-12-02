/**
 * 1. 对现有的数组进行封装,让数组增删改变得更加好用
 * 2. 提供get方法 remove方法 显示方法[add方法]
 * 其中需求中的remove方法有两个,我们用方法重载来实现
 */
import { List } from './types'
export default class ArrayList<T = any> implements List<T>  {
  // 第一步: 定义一个引用属性[数组]
  constructor(public element: T[] = []) {

  }

  add(ele: T) {
    this.element.push(ele);
  }

  size() {
    return this.element.length;
  }
  // 第二步: 根据索引来查询数组中指定元素
  get(index: number): T | undefined {
    return this.element[index]
  }
  // 第三步: 显示方法
  show() {
    this.element.forEach((ele) => {
      console.log(ele);
    })
  }
  // 重载签名
  remove(index: number): number;
  remove(item: T): T;
  remove(indexOrItem: number | T): number | T | undefined {
    const len = this.element.length;
    this.element = this.element.filter((v, i) => {
      // 如果根据数字去删除元素 返回的是一个数字
      if (typeof indexOrItem === 'number') {
        return indexOrItem !== i;
      } else {
        // 如果是根据对象去删除元素 返回的是被删除对象
        return indexOrItem !== v;
      }
    });

    if (typeof indexOrItem === 'number' || this.element.length !== len) {
      return indexOrItem;
    }
    return undefined;
  }
}

let stuOne = { stuname: 'ming', age: 23 }
let stuTwo = { stuname: 'xiaohu', age: 25 }
let stuThree = { stuname: 'letme', age: 24 }
let arraylist = new ArrayList([stuOne, stuTwo, stuThree]);

// arr.show();
/**
 * 如果是根据数字去删除元素,remove方法返回的是一个数字
 * 如果是根据对象去删除元素,remove方法返回的是一个对象
 */

let value = arraylist.remove(1)

console.log('删除的元素为', value);
// arraylist.show();
const arrayList2 = new ArrayList<string>();
arrayList2.add('a');
arrayList2.add('b');
arrayList2.add('c');
arrayList2.add('d');
arrayList2.get(6);
