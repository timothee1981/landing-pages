import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel"; // Add this

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
   adapter: vercel(),
  build: {
    assets: 'assets'
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser'
    }
  }
});
