type TypeStuobj = { username: string, age: number, phone: string }

function info(stuObj: TypeStuobj) {
  console.log("name:", stuObj.username, " age:", stuObj.age);
  return 1
}

let stuObj: TypeStuobj = { username: "lpl", age: 11, phone: "1231" }
info(stuObj)

// 函数解构
function info1({ username, age }: TypeStuobj) {
  console.log("name:", username, " age:", age);
  return 1
}

info1(stuObj)

export { }