import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { UserConfig } from "vite"
import { InlineConfig } from 'vitest'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom'
  },
} as UserConfig & {
  test: InlineConfig
});
