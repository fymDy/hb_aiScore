import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
export default defineConfig({
  plugins: [react()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 默认 @ 指向 src 目录
    },
  },
  // build: {
  //   sourcemap: 'inline',
  // },
})
