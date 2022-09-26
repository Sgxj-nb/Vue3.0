import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig({
  base: './',
  publicDir: path.resolve(__dirname, './dist'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  server: {
    host: '0.0.0.0',
    proxy: {
      '^/api': {
        target: 'https://demo.gin-vue-admin.com', // 如果说是本地需要和后端连接同一个局域网然后换成本地的前端启动服务器地址 然后就会自动转发出去
        changeOrigin: true, // 开启改写window.origin 方法
        ws: true,
        protocolRewrite: 'http',
        autoRewrite: true
      }
    }
  },
  plugins: [vue(), legacy({ targets: ['defaults', 'not IE 11'] }), Components({
    resolvers: [AntDesignVueResolver()]
  }), VueSetupExtend()]
})
