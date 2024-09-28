import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

export default defineConfig({
  plugins: [
    reactRefresh(),
  ],
  base: '/accompany/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables";`
      },
    },
  },
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      "@components": path.resolve(__dirname, 'src/components/lib'),
      "@constants": path.resolve(__dirname, 'src/constants/lib'),
      "@types": path.resolve(__dirname, 'src/types/lib'),
      "@routes": path.resolve(__dirname, 'src/routes/routes'),
      "@context": path.resolve(__dirname, 'src/context/view'),
    },
  },
  define: {
    "process.env": {},
  },
});
