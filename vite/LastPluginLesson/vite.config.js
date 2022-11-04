import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "[hash].[name].[ext]"
      }
    }
  },
  plugins: [
    {
      config(options) {
        console.log("config options执行:", options)
        return {
          mode: "production"
        }
      },
      configureServer(server) {
        server.middlewares.use((req,res,next)=>{})
      },
      transformIndexHtml(html) {
        
      },
      configResolved(options) {
        // 整个配置文件的解析流程完全完毕之后会走的钩子
        // vite在内部有一个默认的配置文件
        console.log('options:', options)
      },
      configurePreviewServer() {

      },
      options(rollupOptions) {
        // universal hooks --> vite和rollup都会关注的hooks
        console.log('rollupOptions', rollupOptions)
      },
      buildStart(fullRollupOptions) {
        console.log("fullRollupOptions", fullRollupOptions)
      },
    }
  ]
})

// 命令行参数  默认的CLI参数

// webpack5  federation 联邦

