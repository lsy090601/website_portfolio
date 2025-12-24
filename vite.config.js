import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  server: {
    proxy: {
      "/api/velog/rss": {
        target: "https://v2.velog.io",
        changeOrigin: true,
        secure: true,
        // 요청을 /api/velog/rss -> /rss/@int_1sy 로 재작성
        rewrite: (path) => path.replace(/^\/api\/velog\/rss$/, "/rss/@int_1sy"),
      },
    },
  },
  base: "/website_portfolio/",
});
