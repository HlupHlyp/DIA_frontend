
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/solar_plant_calc_front",
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:7000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/"),
      },
      "/minio": {
        target: "http://localhost:9000/solar-energy/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/minio/, "/"),
      },
    },
  },
  plugins: [react()],
})