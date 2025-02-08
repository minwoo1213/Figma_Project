import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Cloudflare Pages에서 경로 문제 해결
  build: {
    outDir: 'dist'
  }
});
