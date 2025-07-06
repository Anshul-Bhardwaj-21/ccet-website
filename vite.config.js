import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteCompression from 'vite-plugin-compression';

const base = process.env.VITE_BASE || "/ccet-website/";

export default defineConfig({
  base,
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@posters': path.resolve(__dirname, './src/assets/Students-Section/Student-Welfare/Anti-Ragging/Posters'),
    },
  },
});
