import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/future_tech",
  server: {
    allowedHosts: ['future-tech-suxg.onrender.com'], // Add the host here
    host: '0.0.0.0', // Optional: Bind to all network interfaces
    port: 3000,      // Optional: Your preferred port
  },
})
