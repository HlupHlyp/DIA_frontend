
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import mkcert from 'vite-plugin-mkcert'
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/solar_plant_calc_front",
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'cert.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'cert.crt')),
    },
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
  plugins: [mkcert(), react(), VitePWA({
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true,
    },
    manifest: {
      name: "Solar station generation&saving",
      short_name: "Solar StaGeS",
      start_url: "/",
      display: "standalone",
      background_color: "#fdfdfd",
      theme_color: "#db4938",
      orientation: "portrait-primary",
      icons: [
        {
          "src": "/logo192.png",
          "type": "image/png", "sizes": "192x192"
        },
        {
          "src": "/logo512.png",
          "type": "image/png", "sizes": "512x512"
        }
      ],
    }
  })],
})