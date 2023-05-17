import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

export default defineConfig({
  plugins: [createVuePlugin()],
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
});
