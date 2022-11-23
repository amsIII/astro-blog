import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap"; // STORYBLOKS

import storyblok from "@storyblok/astro";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), storyblok({
    accessToken: "Khrfsg4VNrF3P1dssbjvPgtt",
    bridge: true,
    apiOptions: {
      region: "us"
    },
    // storyblok-js-client options
    components: {
      page: "storyblok/Page",
      feature: "storyblok/Feature",
      grid: "storyblok/Grid",
      teaser: "storyblok/Teaser"
    }
  }), tailwind()]
});