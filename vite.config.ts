import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@layouts": path.resolve(__dirname, "./src/components/layout"),
      "@sections": path.resolve(__dirname, "./src/components/sections"),
      "@ui": path.resolve(__dirname, "./src/components/ui"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@lib": path.resolve(__dirname, "./src/lib")
    }
  },

  server: {
    host: true,
    port: 5173,
    open: true
  },

  preview: {
    host: true,
    port: 4173
  },

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "esbuild",
    chunkSizeWarningLimit: 1500
  }
});
