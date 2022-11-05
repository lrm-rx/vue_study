
// import { count } from "./counter";
// import "./request"
// import "./index.css"
// import "./var.css"
// import "./compA.js"
// import "./compB.js"
// import './index.module.less'

// console.log(count);

// import "./src/imageLoader"
import "./src/svgLoader"
import("./src/imageLoader", []).then(data=>{
  console.log('data:', data)
})
import jsonFile from "./src/assets/json/index.json"
import {name, age} from "./src/assets/json/index.json"

// console.log('json:', jsonFile) 
// 如果不是用vite, 在其他的构建工具里, json文件导入会作为一个JSON字符串形式在存

fetch('/api/users', {
  method: "post"
}).then(data => {
  console.log("data:", data)
}).catch(error => {
  console.error("error:", error)
})


