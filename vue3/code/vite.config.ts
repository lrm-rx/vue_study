import { fileURLToPath, URL } from 'node:url'
import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import alias from '@rollup/plugin-alias';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueSetupExtend(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    alias({
      entries: [
        { find: 'pdfjs-dist', replacement: 'pdfjs-dist' },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'pdfjs-dist': path.resolve(__dirname, 'node_modules/pdfjs-dist'),
    }
  }
})
