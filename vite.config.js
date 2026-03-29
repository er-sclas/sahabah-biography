import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/sahabah-biography-pico/',
  plugins: [react(), tailwindcss()],
})
