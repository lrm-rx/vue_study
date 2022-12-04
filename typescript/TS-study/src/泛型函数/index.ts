/**
 * 1. 先从数列中取出一个数作为基准数
 * 2. 分区过程, 将此这个数大的数全放到它的右边, 小于或等于它的数全部放到它的左边
 * 3. 再对左右区间重复第二步,直到各区间只有一个数.
 */

function quickSort<T>(arr: T[]): T[] {
  if(arr.length < 2) {
    return arr;
  }
  const left: any[] = [];
  const right: any[] = [];
  const mid = arr.splice(Math.floor(arr.length / 2), 1)[0];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] <= mid){
      left.push(arr[i]);
    }else{
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(mid, quickSort(right))
}

let arr = [1, 2, 1, 4, 3, 6, 4, 5];
arr = quickSort(arr);
arr.forEach(v => {});