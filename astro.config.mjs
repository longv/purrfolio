import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://longv.github.io",
  compressHTML: true,
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "dracula"
      }
    }),
    icon({
      iconDir: "src/assets/icons",
      include: {
        icons: ["coursera", "udacity-icon"]
      }
    }),
    tailwind({
      applyBaseStyles: false
    }),
    react(),
    markdoc(),
    (await import("@playform/compress")).default(),
  ]
});
