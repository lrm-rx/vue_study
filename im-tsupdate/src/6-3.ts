// 泛型默认值
class ArrayList<T = any> {
  arr: Array<T>;
  index: number = 0;
  constructor() {
    this.arr = [];
  }
  add(ele: T) {
    this.arr[this.index++] = ele;
  }

  get(index: number) {
    return this.arr[index];
  }
}

let arrList = new ArrayList<string>();
arrList.add("letme");
console.log(arrList.get(0));

let lpl = new ArrayList()

export { }