const arr = [10, 20]
console.log(typeof arr)
const set = new Set()
console.log(typeof set)
const map = new Map()
console.log(typeof map)

console.log(Object.prototype.toString.call(arr))
console.log(Object.prototype.toString.call(set))
console.log(Object.prototype.toString.call(map))

export { }