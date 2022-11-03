import { defineConfig } from "vite"
/*
 * @Author: lrm
 * @Date: 2022-11-03 13:34:58
 * @LastEditors: lrm
 * @LastEditTime: 2022-11-03 15:40:31
 * @FilePath: \vite\vite-test\vite.example.config.js
 */

export default defineConfig({
  optimizeDeps: {
    exclude: [], // 将指定数组中的依赖不进行依赖预构建
  },
  envPrefix: "ENV_"
}) 