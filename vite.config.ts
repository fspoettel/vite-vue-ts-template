/// <reference types="vitest" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./test/setup.ts",
    passWithNoTests: true,
    coverage: {
      provider: "istanbul",
    },
  },
});
