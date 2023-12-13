function calc(num: string | number) {
  // if (typeof num === "number") {
  //   num = num + 10;
  // }
  if (isNum(num)) {
    num + 10;
  }
}

// TS自定义守卫
function isNum(num: any): num is number {
  return typeof num === "number"
}

export { }