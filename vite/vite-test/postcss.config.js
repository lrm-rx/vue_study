/*
 * @Author: lrm
 * @Date: 2022-11-03 23:46:55
 * @LastEditors: lrm
 * @LastEditTime: 2022-11-04 00:05:32
 * @FilePath: \vite\vite-test\postcss.config.js
 */
const postcssPresetEnv = require('postcss-preset-env')
const path = require("path")
module.exports = {
  plugins: [postcssPresetEnv({
    importFrom: path.resolve(__dirname, "./var.css"), // 部分全局变量需要先加载
  })]
}