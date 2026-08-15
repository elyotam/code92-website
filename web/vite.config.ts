import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base is env-driven since the final production host (GitHub Pages vs.
// Vercel/custom domain) isn't decided yet — see plan's Open Items.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? '/',
  server: { port: 5173 },
  build: { sourcemap: true, target: 'es2020' },
})
