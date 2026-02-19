import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // 确保这里指向你的 public 文件夹
  build: {
    outDir: 'dist',
  }
})