import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/future_tech",
  server: {
    port: 3000, // Change this to your desired port
    host: '0.0.0.0', // (Optional) Use this to bind to all network interfaces
  },
})
