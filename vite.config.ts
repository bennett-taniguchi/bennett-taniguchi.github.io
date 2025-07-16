import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  // Remove or modify the esbuild config - it's conflicting with TypeScript
 
  resolve: {
    alias: {
   
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
})