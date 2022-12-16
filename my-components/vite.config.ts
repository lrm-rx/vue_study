import { resolve } from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080
  },
  resolve:{
    //设置路径别名
    alias: {
      '@': resolve(__dirname, './src'),
      '*': resolve('')
      },
  }
})
