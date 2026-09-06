import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import {fileURLToPath} from 'node:url';
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins:[react()],
  css:{postcss:{plugins:[tailwindcss()]}},
  resolve:{alias:{'@':fileURLToPath(new URL('./',import.meta.url))}},
  build:{outDir:'dist',sourcemap:false},
});
