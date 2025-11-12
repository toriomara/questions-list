import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  server: {
    port: 3000,
    proxy: {
      "/questions": { target: "https://api.yeatwork.ru", changeOrigin: true },
      "/specializations": {
        target: "https://api.yeatwork.ru",
        changeOrigin: true,
      },
      "/skills": { target: "https://api.yeatwork.ru", changeOrigin: true },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
    },
  },
});
