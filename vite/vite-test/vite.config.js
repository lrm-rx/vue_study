
/*
 * @Author: lrm
 * @Date: 2022-11-03 00:48:17
 * @LastEditors: lrm
 * @LastEditTime: 2022-11-03 13:50:50
 * @FilePath: \vite\vite-test\vite.config.js
 */
import { defineConfig } from "vite"
import viteBaseConfig from "./vite.base.config"
import viteDevConfig from "./vite.dev.config"
import viteProdConfig from "./vite.prod.config"

/** @type import("vite").UserConfig */
// const viteConfig = {
//   optimizeDeps: {
//     exclude: [], // 将指定数组中的依赖不进行依赖预构建
//   }
// }
// export default viteConfig

// 策略模式 写成函数是为了方便调试
const envResovler = {
  "build": () => {
    console.log('生产环境');
    return ({...viteBaseConfig, ...viteProdConfig})
  },
  "serve": () => {
    console.log('开发环境');
    return Object.assign({}, viteBaseConfig,viteDevConfig)
  }
}

export default defineConfig(({command}) => {
  // build/servee取值取决于开启的命令是开发环境还是生产环境
  console.log('command', command)
  return envResovler[command]()
  // if(command === "build") {
  //   // 代表生产环境的配置
  // }else{
  //   // 代表开发环境的配置
  // }
})