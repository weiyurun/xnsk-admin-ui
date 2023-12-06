// vite.config.js
import { defineConfig } from "file:///D:/codes/xnsk_admin_ui/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/codes/xnsk_admin_ui/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
var vite_config_default = defineConfig({
  resolve: {
    symlinks: false,
    alias: {
      vue: path.resolve("./node_modules/vue")
    },
    dedupe: ["vue"]
  },
  build: {
    target: "es2015",
    outDir: "lib",
    lib: {
      entry: "./index.js",
      name: "XnskAdminUI",
      fileName: "xnsk-admin-ui"
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
        "markdown-it"
      ]
    }
  },
  server: {
    host: true,
    port: 3e3
  },
  optimizeDeps: {},
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // isCustomElement: (tag) => {
          //   return tag.startsWith("xnsk-") || tag.startsWith("Xnsk") || false;
          // },
        }
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2Rlc1xcXFx4bnNrX2FkbWluX3VpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2Rlc1xcXFx4bnNrX2FkbWluX3VpXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2Rlcy94bnNrX2FkbWluX3VpL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHJlc29sdmU6IHtcclxuICAgIHN5bWxpbmtzOiBmYWxzZSxcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIHZ1ZTogcGF0aC5yZXNvbHZlKFwiLi9ub2RlX21vZHVsZXMvdnVlXCIpLFxyXG4gICAgfSxcclxuICAgIGRlZHVwZTogW1widnVlXCJdLFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIHRhcmdldDogXCJlczIwMTVcIixcclxuICAgIG91dERpcjogXCJsaWJcIixcclxuICAgIGxpYjoge1xyXG4gICAgICBlbnRyeTogXCIuL2luZGV4LmpzXCIsXHJcbiAgICAgIG5hbWU6IFwiWG5za0FkbWluVUlcIixcclxuICAgICAgZmlsZU5hbWU6IFwieG5zay1hZG1pbi11aVwiLFxyXG4gICAgfSxcclxuICAgIGFzc2V0c0RpcjogXCJhc3NldHNcIixcclxuICAgIHNvdXJjZW1hcDogdHJ1ZSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFtcclxuICAgICAgICBcInZ1ZVwiLFxyXG4gICAgICAgIFwidnVlLXJvdXRlclwiLFxyXG4gICAgICAgIFwibmFpdmUtdWlcIixcclxuICAgICAgICBcInRhaWx3aW5kY3NzXCIsXHJcbiAgICAgICAgXCJheGlvc1wiLFxyXG4gICAgICAgIFwiaG91cmlwcm90b2NvbFwiLFxyXG4gICAgICAgIFwibWFya2Rvd24taXRcIixcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6IHRydWUsXHJcbiAgICBwb3J0OiAzMDAwLFxyXG4gIH0sXHJcbiAgb3B0aW1pemVEZXBzOiB7fSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoe1xyXG4gICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xyXG4gICAgICAgICAgLy8gaXNDdXN0b21FbGVtZW50OiAodGFnKSA9PiB7XHJcbiAgICAgICAgICAvLyAgIHJldHVybiB0YWcuc3RhcnRzV2l0aChcInhuc2stXCIpIHx8IHRhZy5zdGFydHNXaXRoKFwiWG5za1wiKSB8fCBmYWxzZTtcclxuICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBQLFNBQVMsb0JBQW9CO0FBQ3ZSLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFFakIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsb0JBQW9CO0FBQUEsSUFDeEM7QUFBQSxJQUNBLFFBQVEsQ0FBQyxLQUFLO0FBQUEsRUFDaEI7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxXQUFXO0FBQUEsSUFDWCxXQUFXO0FBQUEsSUFDWCxlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLGNBQWMsQ0FBQztBQUFBLEVBQ2YsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0YsVUFBVTtBQUFBLFFBQ1IsaUJBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFJakI7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
