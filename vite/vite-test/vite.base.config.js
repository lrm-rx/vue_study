import { defineConfig } from "vite"
/*
 * @Author: lrm
 * @Date: 2022-11-03 13:34:58
 * @LastEditors: lrm
 * @LastEditTime: 2022-11-03 13:35:14
 * @FilePath: \vite\vite-test\vite.base.config.js
 */

export default defineConfig({
  optimizeDeps: {
    exclude: [], // 将指定数组中的依赖不进行依赖预构建
  }
}) 