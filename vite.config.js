import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // This allows access from the local network
    port: 5173, // The port your Vite app will run on
  },
  plugins: [react()],
})
