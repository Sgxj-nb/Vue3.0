import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  base: './',
  publicDir: path.resolve(__dirname, './dist'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [vue(), legacy({ targets: ['defaults', 'not IE 11'] }), Components({
    resolvers: [AntDesignVueResolver()]
  })]
})
