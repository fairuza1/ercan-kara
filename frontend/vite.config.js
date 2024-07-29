import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/api":"http://localhost:8080"
    }
  }
})
//eğer bir url api ile başlıyorsa bunu localhost8080 yönlendir anlamına geliyor en son yapılan porxy ayarı
