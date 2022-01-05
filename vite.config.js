import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");
function _resolve(dir) {
  return path.resolve(__dirname, dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": _resolve("src"),
      // '@assets': _resolve('src/assets'),
      "@comps": _resolve("src/components"),
      // '@utils': _resolve('src/utils'),
      "@router": _resolve("src/router"),
      "@views": _resolve("src/views"),
      // '@store': _resolve('src/store'),
    },
  },
  plugins: [vue()],
  server: {
    proxy: {
      "/test": {
        target: "http://localhost:3001/test",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/test/, ""),
      },
    },
  },
});
