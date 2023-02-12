import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import vercel from "@astrojs/vercel/serverless";

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    // accessToken: env.STORYBLOK_TOKEN,
    accessToken: 'r9ie4IIkISoPVfCgX7Kx7Att',
    components: {
      page: "storyblok/Page",
    feature: "storyblok/Feature",
    grid: "storyblok/Grid",
    teaser: "storyblok/Teaser",
    },
    apiOptions: {
      // Choose your Storyblok space region
      region: 'us' // optional,  or 'eu' (default)
    }
  })],
  output: "server",
  adapter: vercel()
});