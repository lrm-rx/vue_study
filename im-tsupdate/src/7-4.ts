import { quickSort } from "./7-3-quickSort"

const cityArr = ["南宁", "广州", "东莞", "佛山", "太原", "石家庄", "上海", "郑州", "深圳", "北京", "玉林"]

const city1 = "深圳"
const city2 = "广州"
console.log(city1.localeCompare(city2, "zh-CN"))

function sortChinese(arr: Array<string>): Array<String> {
  arr.sort(function (preStr, curStr) {
    return preStr.localeCompare(curStr, "zh-CN")
  })
  return arr
}

console.log(sortChinese(cityArr));

// 判断是否是中文
function isChinese(arr: Array<string>): boolean {
  const pattern = /[\u4e00-\u9fa5]+/g
  return arr.some(item => {
    return pattern.test(item)
  })
}

export { sortChinese, isChinese }