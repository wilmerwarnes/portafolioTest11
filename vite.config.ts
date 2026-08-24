import { defineConfig } from 'vite';

export default defineConfig({
  base: '/portafolioTest11/',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: 'index.html',
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});