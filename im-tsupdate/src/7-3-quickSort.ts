
function quickSort<E>(arr: Array<E>): Array<E> {
  if (arr.length < 2) {
    return arr;
  }
  const left: Array<E> = []
  const right: Array<E> = []
  const mid = arr.splice(Math.floor(arr.length / 2), 1)[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(mid, quickSort(right))
}
const numberArr = [2, 1, 4, 5, 1, 56, 34, 66, 66, 88, 87, 13, 4356, 1232, 109]
const result = quickSort(numberArr)
result.forEach(item => {
  item.toFixed(2)
  console.log(item);
})

export { quickSort }