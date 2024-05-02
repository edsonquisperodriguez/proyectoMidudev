import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/app',
  server: {
    https: false,
    port: 5173
  },
  plugins: [react(), mkcert()],
})
