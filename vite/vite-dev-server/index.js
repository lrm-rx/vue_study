
const Koa = require("koa");
const fs = require("fs");
const path = require("path");
const alisaResolver = require("./aliasResolver")

const app = new Koa(); 

// 读取vite.config.js
const viteConfig = require("./vite.config") // 读到配置文件
// console.log("vite.Config", viteConfig)

// process process.cwd()  process.env
viteConfig.plugins.forEach(plugin => plugin.config && plugin.config(viteConfig));

const mergeOptions = Object.assign({}, defautlConfig, viteconfig, terminalConf)

viteConfig.plugins.forEach(plugin => plugin.config && plugin.configResolved(mergeOptions));

// transformIndexHtml


app.use(async(ctx)=> {
  // console.log('ctx',ctx.request, ctx.response)
  if(ctx.request.url === "/") {
    const indexContent = await fs.promises.readFile(path.resolve(__dirname, "./index.html"))
    let cacheIndexHtml = indexContent
    viteConfig.plugins.forEach(plugin => {
      if(plugin.transformIndexHtml) {
        cacheIndexHtml = plugin.transformIndexHtml(cacheIndexHtml)
      }
    });
    ctx.response.body = indexContent;
    // 响应体填充好后,以什么形式返回给前端?
    // json --> application/json text/html  text/javascript
    ctx.response.set("Content-Type", "text/html")
  }
  // 如果当前文件的url是以js后缀结尾的
  if(ctx.request.url.endsWith(".js")) {
    const JSContent = await fs.promises.readFile(path.resolve(__dirname, "." + ctx.request.url))
    // console.log('JSContent', JSContent)
    // 直接进行alias的替换
    const lastResult = alisaResolver(viteConfig.resolve.alias, JSContent.toString())
    ctx.response.body = lastResult;
    // 响应体填充好后,以什么形式返回给前端?
    // json --> application/json text/html  text/javascript
    ctx.response.set("Content-Type", "text/javascript")
  }
})

app.listen(3002, ()=> {
  console.log('3002端口已经开启啦!')
})