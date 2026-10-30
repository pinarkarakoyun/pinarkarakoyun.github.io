import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // İki sayfa: portfolyo (index.html) ve basılabilir CV (cv.html)
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        cv: resolve(import.meta.dirname, 'cv.html'),
      },
    },
  },
})
