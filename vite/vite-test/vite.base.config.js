/*
 * @Author: lrm
 * @Date: 2022-11-03 13:34:58
 * @LastEditors: lrm
 * @LastEditTime: 2022-11-04 00:05:28
 * @FilePath: \vite\vite-test\vite.base.config.js
 */
import { defineConfig } from "vite"
const postcssPresetEnv = require('postcss-preset-env')
export default defineConfig({
  optimizeDeps: {
    exclude: [], // 将指定数组中的依赖不进行依赖预构建
  },
  envPrefix: "ENV_",
  css: { // 对css的行为进行配置
    // modules配置最终会丢给postcss modules处理
    modules: { // 是对css模块化的默认行为进行覆盖
      localsConvention: "camelCaseOnly", // 修改生成的配置对象的key的展示形式(驼峰还是中划线形式)
      scopeBehaviour: "local", // local/global
      generateScopedName: "[name]_[local]_[hash:5]",
      // generateScopedName: (name, filename, css) => {
      //   // name: 代表的是此时css文件的类名
      //   // filtename: 当前css文件的绝对路径
      //   // css: 当前设置的样式
      //   console.log("name", name, "filename", filename, "css", css)
      //   // 配置成函数以后, 返回值就决定了它最终显示的类型
      //   return `${name}-${Math.random().toString(36).substring(3, 8)}`
      // }
      hashPrefix: "hello",
      globalModulePaths: [], // 不参与到css模块化的路径
    },
    preprocessorOptions: { // key:value
      // 在webpack中可以到less-loader中配置
      less: { // 整个的配置对象都会最终给到less的执行参数(全局参数)中去
        math: "always", 
        globalVars: { // 全局变量
          mainColor: "red",
        }
      },
      sass: {},
      devSourcemap: true, // 开启文件索引
      // postcss: {
      //   plugins: [postcssPresetEnv()] // 在这里设置不生效?
      // }
    },
    postcssOptions: {
      
    }
  }
}) 