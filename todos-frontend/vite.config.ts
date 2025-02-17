import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['5173-yhungarox-solidityrefre-wpl4zi16orz.ws-eu117.gitpod.io']
  }
})
