import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import path from 'path';
const isProduction = process.env.NODE_ENV == 'production'
export default defineConfig({
  // 项目跟目录
  root: process.cwd(),
  // 在生产环境中的基本公共路径
  base: isProduction ? './' : '',
  // 配置中指明将会把 serve 和 build 时的模式都覆盖掉,serve 时默认 'development'，build 时默认 'production'
  mode: 'development',
  // 静态资源文件
  publicDir: 'assets',
  //别名路径配置
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '/images': 'src/assets/images' // 配置图片不显示的问题
    },
    extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  // css 预处理器
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`
      },
      less: {
        javascriptEnabled: true
      }
    }
  },
  server: {
    // 是否自动打开浏览器
    open: true,
    // 设置为 true 强制使依赖预构建
    force: true,
    // 代理
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xx',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // },
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`
        }
      ]
    }),
  ],

  // 打包
  build: {
    minify: 'esbuild',
    assetsDir: 'static/img/',
    outDir: `./dist`,
    // 进行压缩计算
    brotliSize: false,
    // 分包打包
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    },
    // 生产环境移除 console
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
})