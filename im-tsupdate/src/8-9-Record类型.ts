let obj = {
  name: "lpl"
}
// function addObj(obj: object) {}
function addObj(rec: Record<string, string | number>) { }
addObj({ name: "lrm", age: 23 })

type Record<K extends keyof any, T> = {
  [P in K]: T;
}

type Record_ = Record<symbol, string | number>
let rec: Record_ = {
  // name: "lrm",
  [Symbol("codeNo")]: 1002,
  // 200: 122
}






export { }