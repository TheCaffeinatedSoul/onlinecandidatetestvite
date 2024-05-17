import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  preview: {
    port: 8000,
  },
  server: {
    port: 8000,
  },
});
