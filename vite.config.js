import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',  // 이 부분을 추가
  build: {
    outDir: 'dist'
  }
});
