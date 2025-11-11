import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // "@shared": path.resolve(__dirname, "./src/shared"),
      // "@entities": path.resolve(__dirname, "./src/entities"),
      // "@features": path.resolve(__dirname, "./src/features"),
      // "@widgets": path.resolve(__dirname, "./src/widgets"),
      // "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});
