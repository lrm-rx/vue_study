// import mockJS from "mockjs"
const mockJS = require("mockjs")
const userList = mockJS.mock({
  "data|100": [{
    name: "@name", // 生成不同的中文名
    time: "@time",
    date: "@date"
  }]
})
// console.log('userList:', userList)




module.exports = [
  {
    method: "post",
    url: "/api/users",
    response: ({body}) => {
      // body -> 请求体
      // page pageSize body
      return {
        code: 200,
        msg: "success",
        data: userList.data
      };
    }
  }
]