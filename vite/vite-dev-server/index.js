/*
 * @Author: lrm
 * @Date: 2022-11-03 16:00:15
 * @LastEditors: lrm
 * @LastEditTime: 2022-11-03 17:49:53
 * @FilePath: \vite\vite-dev-server\index.js
 */
const Koa = require("koa");
const fs = require("fs");
const path = require("path");

const app = new Koa(); 

app.use(async(ctx)=> {
  console.log('ctx',ctx.request, ctx.response)
  if(ctx.request.url === "/") {
    const indexContent = await fs.promises.readFile(path.resolve(__dirname, "./index.html"))
    ctx.response.body = indexContent;
    // 响应体填充好后,以什么形式返回给前端?
    // json --> application/json text/html  text/javascript
    ctx.response.set("Content-Type", "text/html")
  }
  if(ctx.request.url === "/main.js") {
    const mainJSContent = await fs.promises.readFile(path.resolve(__dirname, "./main.js"))
    ctx.response.body = mainJSContent;
    // 响应体填充好后,以什么形式返回给前端?
    // json --> application/json text/html  text/javascript
    ctx.response.set("Content-Type", "text/javascript")
  }
  if(ctx.request.url === "/APP.vue") {
    const appVueContent = await fs.promises.readFile(path.resolve(__dirname, "./App.vue"))
    ctx.response.body = appVueContent;
    // 响应体填充好后,以什么形式返回给前端?
    // json --> application/json text/html  text/javascript
    ctx.response.set("Content-Type", "text/javascript")
  }
})

app.listen(3002, ()=> {
  console.log('3002端口已经开启啦!')
})