import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer';
// 获取环境变量
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: false }) //分析真实拆包结构 true:构建会默认打开
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 默认 @ 指向 src 目录
    },
  },
   build: {
    sourcemap: isDev
      ? 'inline'      // 开发环境：直接内联到 JS 里，方便调试
      : isProd
        ? false       // 生产环境：关闭 sourcemap，避免泄露源码
        : true,       // 其它情况（如测试预发布）：生成 .map 文件
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
            // 静态资源分类输出
       assetFileNames: (assetInfo) => {
          const originalName = assetInfo?.name ?? ''; // fallback 防止 undefined
          const ext = originalName.split('.').pop()?.toLowerCase();

          if (!ext) return 'assets/[name]-[hash][extname]'; // 没扩展名 fallback

          if (['css'].includes(ext)) return 'css/[name]-[hash][extname]';
          if (['woff2', 'woff', 'ttf', 'eot'].includes(ext)) return 'fonts/[name]-[hash][extname]';
          if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(ext)) return 'img/[name]-[hash][extname]';

          return 'assets/[name]-[hash][extname]';
        },
        manualChunks(id) {//使用 manualChunks() 显式命名公共模块
          if (id.includes('node_modules/react')) return 'react';
          if (id.includes('node_modules/antd')) return 'antd';
          if (id.includes('node_modules')) return 'vendor';
        }
      }
    }
  }
})
