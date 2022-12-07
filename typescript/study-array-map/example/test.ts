// import arrayMap = require('../dist/study-array-map')
import arrayMap from '../dist/study-array-map'
let newArr = arrayMap([1, 2], item => {
  return item + 2
})
console.log(newArr);
