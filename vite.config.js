import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  resolve: {
    symlinks: false,
    alias: {
      vue: path.resolve("./node_modules/vue"),
    },
  },
  build: {
    target: "es2015",
    outDir: "lib",
    lib: {
      entry: "./index.js",
      name: "XnskAdminUI",
      fileName: "xnsk-admin-ui",
    },
    assetsDir: "assets",
    sourcemap: true,
    rollupOptions: {
      external: [
        "vue",
        "vue-router",
        "naive-ui",
        "tailwindcss",
        "axios",
        "houriprotocol",
        "markdown-it",
      ],
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:8080",
    },
    hmr: {
      overlay: false,
    },
  },
  optimizeDeps: {},
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // isCustomElement: (tag) => {
          //   return tag.startsWith("xnsk-") || tag.startsWith("Xnsk") || false;
          // },
        },
      },
    }),
  ],
});
