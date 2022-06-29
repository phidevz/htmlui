import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    cors: true,
    proxy: {
      "/api": "http://127.0.0.1:51515"
    }
  },
  test: {
    environment: 'jsdom'
  }
})
