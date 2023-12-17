import { quickSort } from "./7-3-quickSort"
import { sortChinese, isChinese } from './7-4';


const cityArr = ["南宁", "广州", "东莞", "佛山", "太原", "石家庄", "上海", "郑州", "深圳", "北京", "玉林"]

export function strSelfSort(str: string) {
  return quickSort(str.split("")).join("");
}
export function sort<T>(data: T)
export function sort<T>(data: T) {
  if (data instanceof Array) {
    if (isChinese(data)) {
      return sortChinese(data)
    } else {
      return quickSort(data)
    }
  } else if (typeof data === "string") {
    return strSelfSort(data)
  }
}

export { }