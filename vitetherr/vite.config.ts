import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 引入Tsx
import vueJsx from '@vitejs/plugin-vue-jsx';
// 引入 path 
import { resolve } from 'path';
// 引入gzip
import viteCompression from 'vite-plugin-compression'
// 引入legacyPlugin
import legacyPlugin from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [vue(),
  vueJsx({
    include: /\.(jsx|tsx)/
  }),
  // 压缩配置
  viteCompression({
    verbose: true,
    disable: false,
    threshold: 10240,
    algorithm: 'gzip',
    ext: '.gz',
  }),
  // 兼容Ie和chrome
  legacyPlugin({
    targets: ["chrome 52", 'ie >= 11'],
    additionalLegacyPolyfills: ['regenerator-runtime/runtime'] // 面向IE11时需要此插
  })
  ],

  // 配置路径别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },

  // 配置启动
  server: {
    host: '0.0.0.0',
    open: true
  },

  // 预留一个识别sass全局变量配置(此处我不做配置 因为我自己不爱用这玩意)
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ``
      }
    }
  },

  // 项目打包配置
  build: {
    // 清除console和debug
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    },

    // 掩耳盗铃技巧
    // chunkSizeWarningLimit: 1500 // 针对于超级的大文件 最大限制是500 但是超过就会警告 那么就直接提高他的显示他就不会警告了
  },
})
