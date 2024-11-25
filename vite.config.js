import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'https://api.maileon.com/1.0',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        app: 'index.html',
      },
    },
    outDir: 'dist'
  },
});
