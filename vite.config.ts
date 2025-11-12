import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  base: "/",
  server: {
    port: 3000,
    // proxy: {
    //   "/questions": { target: "https://api.yeatwork.ru", changeOrigin: true },
    //   "/specializations": {
    //     target: "https://api.yeatwork.ru",
    //     changeOrigin: true,
    //   },
    //   "/skills": { target: "https://api.yeatwork.ru", changeOrigin: true },
    // },
    proxy: {
      "/api": {
        target:
          mode === "production"
            ? "https://api.yeatwork.ru"
            : "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false,
      },
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
}));

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// export default defineConfig(({ mode }) => ({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": {
//         target:
//           mode === "production"
//             ? "http://api.example.com"
//             : "http://localhost:3000",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//         secure: false,
//       },
//     },
//   },
// }));
