// vite.config.ts
import { ViteWebfontDownload } from "file:///C:/Users/Asim/Documents/GitHub/ihart/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
import { chunkSplitPlugin } from "file:///C:/Users/Asim/Documents/GitHub/ihart/node_modules/vite-plugin-chunk-split/dist/index.js";
import { defineConfig } from "file:///C:/Users/Asim/Documents/GitHub/ihart/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Asim/Documents/GitHub/ihart/node_modules/@vitejs/plugin-react/dist/index.mjs";
import viteCompression from "file:///C:/Users/Asim/Documents/GitHub/ihart/node_modules/vite-plugin-compression/dist/index.mjs";
var vite_config_default = defineConfig({
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: "/src/components"
      },
      {
        find: "@assets",
        replacement: "/src/assets"
      },
      {
        find: "@router",
        replacement: "/router"
      },
      {
        find: "@modules",
        replacement: "/modules"
      }
    ]
  },
  plugins: [
    chunkSplitPlugin(),
    ViteWebfontDownload(),
    viteCompression({
      algorithm: "brotliCompress",
      threshold: 100
    }),
    // viteImagemin({
    //   gifsicle: {
    //     optimizationLevel: 7,
    //     interlaced: false,
    //   },
    //   optipng: {
    //     optimizationLevel: 7,
    //   },
    //   mozjpeg: {
    //     quality: 30,
    //   },
    //   pngquant: {
    //     quality: [0.7, 0.8],
    //     speed: 4,
    //   },
    //   webp: {
    //     quality: 70,
    //   },
    //   svgo: {
    //     multipass: true,
    //     plugins: [
    //       {
    //         name: "removeViewBox",
    //       },
    //       {
    //         name: "minifyStyles",
    //       },
    //       {
    //         name: "removeMetadata",
    //       },
    //       {
    //         name: "removeUselessStrokeAndFill",
    //       },
    //       {
    //         name: "reusePaths",
    //       },
    //       {
    //         name: "removeEmptyAttrs",
    //         active: true,
    //       },
    //     ],
    //   },
    // }),
    react()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBc2ltXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcaWhhcnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEFzaW1cXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxpaGFydFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQXNpbS9Eb2N1bWVudHMvR2l0SHViL2loYXJ0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgVml0ZVdlYmZvbnREb3dubG9hZCB9IGZyb20gXCJ2aXRlLXBsdWdpbi13ZWJmb250LWRsXCI7XHJcbmltcG9ydCB7IGNodW5rU3BsaXRQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4tY2h1bmstc3BsaXRcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgdml0ZUNvbXByZXNzaW9uIGZyb20gXCJ2aXRlLXBsdWdpbi1jb21wcmVzc2lvblwiO1xyXG4vLyBpbXBvcnQgdml0ZUltYWdlbWluIGZyb20gXCJ2aXRlLXBsdWdpbi1pbWFnZW1pblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgZmluZDogXCJAY29tcG9uZW50c1wiLFxyXG4gICAgICAgIHJlcGxhY2VtZW50OiBcIi9zcmMvY29tcG9uZW50c1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZmluZDogXCJAYXNzZXRzXCIsXHJcbiAgICAgICAgcmVwbGFjZW1lbnQ6IFwiL3NyYy9hc3NldHNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGZpbmQ6IFwiQHJvdXRlclwiLFxyXG4gICAgICAgIHJlcGxhY2VtZW50OiBcIi9yb3V0ZXJcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGZpbmQ6IFwiQG1vZHVsZXNcIixcclxuICAgICAgICByZXBsYWNlbWVudDogXCIvbW9kdWxlc1wiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIGNodW5rU3BsaXRQbHVnaW4oKSxcclxuICAgIFZpdGVXZWJmb250RG93bmxvYWQoKSxcclxuICAgIHZpdGVDb21wcmVzc2lvbih7XHJcbiAgICAgIGFsZ29yaXRobTogXCJicm90bGlDb21wcmVzc1wiLFxyXG4gICAgICB0aHJlc2hvbGQ6IDEwMCxcclxuICAgIH0pLFxyXG4gICAgLy8gdml0ZUltYWdlbWluKHtcclxuICAgIC8vICAgZ2lmc2ljbGU6IHtcclxuICAgIC8vICAgICBvcHRpbWl6YXRpb25MZXZlbDogNyxcclxuICAgIC8vICAgICBpbnRlcmxhY2VkOiBmYWxzZSxcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgb3B0aXBuZzoge1xyXG4gICAgLy8gICAgIG9wdGltaXphdGlvbkxldmVsOiA3LFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICBtb3pqcGVnOiB7XHJcbiAgICAvLyAgICAgcXVhbGl0eTogMzAsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIHBuZ3F1YW50OiB7XHJcbiAgICAvLyAgICAgcXVhbGl0eTogWzAuNywgMC44XSxcclxuICAgIC8vICAgICBzcGVlZDogNCxcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgd2VicDoge1xyXG4gICAgLy8gICAgIHF1YWxpdHk6IDcwLFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICBzdmdvOiB7XHJcbiAgICAvLyAgICAgbXVsdGlwYXNzOiB0cnVlLFxyXG4gICAgLy8gICAgIHBsdWdpbnM6IFtcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgbmFtZTogXCJyZW1vdmVWaWV3Qm94XCIsXHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgICAge1xyXG4gICAgLy8gICAgICAgICBuYW1lOiBcIm1pbmlmeVN0eWxlc1wiLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgbmFtZTogXCJyZW1vdmVNZXRhZGF0YVwiLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgbmFtZTogXCJyZW1vdmVVc2VsZXNzU3Ryb2tlQW5kRmlsbFwiLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgbmFtZTogXCJyZXVzZVBhdGhzXCIsXHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgICAge1xyXG4gICAgLy8gICAgICAgICBuYW1lOiBcInJlbW92ZUVtcHR5QXR0cnNcIixcclxuICAgIC8vICAgICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICBdLFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gfSksXHJcbiAgICByZWFjdCgpLFxyXG4gIF0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBTLFNBQVMsMkJBQTJCO0FBQzlVLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLHFCQUFxQjtBQUc1QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsaUJBQWlCO0FBQUEsSUFDakIsb0JBQW9CO0FBQUEsSUFDcEIsZ0JBQWdCO0FBQUEsTUFDZCxXQUFXO0FBQUEsTUFDWCxXQUFXO0FBQUEsSUFDYixDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTRDRCxNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
