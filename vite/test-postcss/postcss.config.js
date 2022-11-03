const postcssPresetEnv = require('postcss-preset-env')
// 预设环境包含很多插件
// 做语法的编译: less, sass
module.exports = {
  plugins: [postcssPresetEnv()]
}


