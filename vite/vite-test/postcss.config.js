
const postcssPresetEnv = require('postcss-preset-env')
const path = require("path")
module.exports = {
  plugins: [postcssPresetEnv({
    importFrom: path.resolve(__dirname, "./var.css"), // 部分全局变量需要先加载
  })]
}