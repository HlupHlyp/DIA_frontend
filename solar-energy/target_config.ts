const target_tauri = false

export const api_proxy_addr = "http://192.168.0.104:7000"
export const img_proxy_addr = "http://192.168.0.104:9000"
export const dest_api = (target_tauri) ? api_proxy_addr : "api"
export const dest_img = (target_tauri) ? img_proxy_addr : "minio"
export const dest_root = (target_tauri) ? "" : "/solar_plant_calc"