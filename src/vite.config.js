import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/website_portfolio/"  // ★ 이거 꼭 있어야 함
})
