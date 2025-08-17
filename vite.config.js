import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/naila-portfolio/", // 👈 VERY IMPORTANT
  plugins: [react()],
})
