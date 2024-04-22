import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import react from "@astrojs/react";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  integrations: [mdx(), icon({
    include: {
      icons: ["coursera", "udacity-icon"],
    }
  }), tailwind({
    applyBaseStyles: false
  }), compress(), react()]
});
