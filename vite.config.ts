import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { mdx } from "@cyco130/vite-plugin-mdx"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [mdx(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
