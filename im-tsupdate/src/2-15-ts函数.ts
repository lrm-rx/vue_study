function info(name: string, age: number): number {
  console.log("name:", name, " age:", age);
  return 2
}
info("lpl", 10)

let info1 = function (name: string, age: number) {
  console.log("name:", name, " age:", age);
  return 2
}

info1("lpl", 10)

let info2: (name: string, age: number) => number = function (name, age) {
  console.log("name:", name, " age:", age);
  return 2
}

type InfoFunType = (name: string, age: number) => number

let info3: InfoFunType = function (name, age) {
  console.log("name:", name, " age:", age);
  return 2
}

// rest 参数
function info4(name: string, age: number, ...rest: any): number {
  console.log("name:", name, " age:", age, " rest:", rest);
  return rest
}

export { }