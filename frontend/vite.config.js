import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
//eğer bir url api ile başlıyorsa bunu localhost8080 yönlendir anlamına geliyor en son yapılan porxy ayarı

