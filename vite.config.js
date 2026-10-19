import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/contact': {
        target: 'https://www.neutrixlab.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
