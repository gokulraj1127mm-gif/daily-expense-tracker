import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // Exposes Vite on the local network so Docker can route it
    port: 5173,       // Explicitly ensures it matches the port in your compose file
    watch: {
      usePolling: true // Crucial for Hot Module Replacement (HMR) to work inside Windows Docker volumes
    }
  }
})