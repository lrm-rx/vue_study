import {defineConfig} from "vite"
import path from "path";

import checker from "vite-plugin-checker"

export default defineConfig({
  build: {
    manifest:false,
    sourcemap: false, //构建后是否生成 source map 文件,
    rollupOptions: {
      input: {
        // 多入口
        main: path.resolve(__dirname, "./index.html"),
        product: path.resolve(__dirname, "./src/product.html")
      },
      output: {
        // 分包策略
        manualChunks: (id: string) => {
          // ts 认为当前环境不在es6以后
          if(id.includes("node_modules")) {
            return "vendor";
          }
        }
      }
    }
  },
  plugins: [
    checker({
      typescript: true
    })
  ]
})