import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const path = require('path');

export default defineConfig({
  build: {
    sourcemap: true,
  },
  publicDir: 'public',
  esbuild: {
    jsxInject: `import { jsx as _jsx } from 'react/jsx-runtime'`,
  },
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/react/jsx-dev-runtime'],
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@config': path.resolve(__dirname, './src/config'),
      '@custom-types': path.resolve(__dirname, './src/types'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@router': path.resolve(__dirname, './src/router.tsx'),
      '@services': path.resolve(__dirname, './src/services'),
      '@shared-types': path.resolve(__dirname, './src/shared-types'),
      '@theme': path.resolve(__dirname, './src/theme'),
    },
  },
});
