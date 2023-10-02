import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: "8899",
    proxy: {
      "/api": {
        target: "https://glz.ihp.zkml.cn/api",
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.resolve(/^\/api/, ""),
      },
    },
  },
});
