import { quickSort } from "./7-3-quickSort"

const cityArr = ["南宁", "广州", "东莞", "佛山", "太原", "石家庄", "上海", "郑州", "深圳", "北京", "玉林"]

export function strSelfSort(str: string) {
  return quickSort(str.split("")).join("");
}

export { }