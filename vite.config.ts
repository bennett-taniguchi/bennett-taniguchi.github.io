import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
 
// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react(), tailwindcss() ],
  esbuild:{loader:'jsx'},
   base: '/bennett-taniguchi.github.io/',
  resolve: {
    alias: {
       './runtimeConfig':"./runtimeConfig.browser",
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps:{
    esbuildOptions:{
      loader:{
        ".js":"jsx",
      }
    }
  }
})