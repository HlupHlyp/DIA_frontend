
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
//import mkcert from 'vite-plugin-mkcert'
//import fs from 'fs';
//import path from 'path';
import { /*api_proxy_addr, img_proxy_addr,*/ api_proxy_addr, dest_root, img_proxy_addr } from "./target_config"

// https://vitejs.dev/config/
export default defineConfig({
  //base: "/solar_plant_calc_front",
  base: dest_root,
  /*preview: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'cert.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'cert.crt')),
    },
    port: 443,
  },*/
  server: {
    host: true,
    port: 3000,
    proxy: {
      "/api": {
        target: api_proxy_addr,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/minio": {
        target: img_proxy_addr,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/minio/, "/"),
      },
    },
  },
  plugins: [/*mkcert()*/, react(), VitePWA({
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