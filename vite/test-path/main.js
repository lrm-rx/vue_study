
/**
 * 一定会去读文件
 * 我们如果写的是相对路径, 它会尝试去拼接成绝对路径
 * node去读取文件或操作文件的时候,如果发现你用的是相对路径, 则会去使用process.cwd()来进行对应的拼接
 * process.cwd: 获取当前node执行目录
 * __dirname: 始终返回的是当前文件所在的目录
 * 
 * commonjs规范 注入变量 __dirname
 */
require("./src/a")
const fs = require("fs")
const path = require("path") // path本质上就是一个字符串处理模块,它里面有非常多的路径字符串处理方法
// path.resolve 在拼接字符串
// const result = fs.readFileSync(__dirname + "/var.css"); 
const result = fs.readFileSync(path.resolve(__dirname + "/var.css")); 


// console.log("result", result.toString(), process.cwd())
