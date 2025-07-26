import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "http://qr-historico.space/",
  plugins: [
    createHtmlPlugin({
      entry: "/src/main.js", // o .ts, .jsx, etc
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        fallback: "index.html", // para 404.html si querés copiarlo después
      },
    },
  },
});
