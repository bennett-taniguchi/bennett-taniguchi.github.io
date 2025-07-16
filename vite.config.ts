import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  // Remove or modify the esbuild config - it's conflicting with TypeScript
  esbuild: {
    loader: 'tsx', // Change from 'jsx' to 'tsx' for TypeScript support
  },
  resolve: {
    alias: {
      './runtimeConfig': "./runtimeConfig.browser",
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
        ".ts": "tsx", // Add TypeScript support
        ".tsx": "tsx", // Add TSX support
      }
    }
  }
})