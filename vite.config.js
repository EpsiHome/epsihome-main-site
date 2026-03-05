import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      i18next: resolve(
        __dirname,
        'node_modules/i18next/dist/esm/i18next.js',
      ),
      'i18next-browser-languagedetector': resolve(
        __dirname,
        'node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js',
      ),
      'i18next-http-backend': resolve(
        __dirname,
        'node_modules/i18next-http-backend/esm/index.js',
      ),
    },
  },
  optimizeDeps: {
    include: [
      'i18next',
      'i18next-browser-languagedetector',
      'i18next-http-backend',
      'react-i18next',
      'void-elements',
    ],
  },
})
