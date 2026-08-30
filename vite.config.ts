import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import path from 'path';

export default defineConfig({
  base: "/",
  // reactRouter() includes the React plugin itself — adding @vitejs/plugin-react
  // alongside it would double-transform and break Fast Refresh.
  plugins: [reactRouter()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
