
module.exports = (options) => {
  return {
    // 转换html\
    transformIndexHtml: {
      enforce: "pre",
      transform: (html, ctx) => {
          // ctx 表示当前整个请求的一个执行期上下文: api/index.html  /user/userlist json get post headers
          // console.log("html", html)
          return html.replace(/<%= title %>/g,options.inject.data.title)
      }
    }

  }
}