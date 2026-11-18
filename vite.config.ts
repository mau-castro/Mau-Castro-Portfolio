import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { routes } from './src/pagePaths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Mau-Castro-Portfolio/',
  build: {
    rollupOptions: {
      input: Object.values(routes).map(route => fileURLToPath(new URL(`./${route}index.html`, import.meta.url))),
    },
  },
})
