import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-cname",
      writeBundle() {
        fs.copyFileSync("CNAME", "dist/CNAME");
      },
    },
  ],
  base: "https://withapoll.com/",
});
