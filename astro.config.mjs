// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import db from '@astrojs/db';
import tailwindVite from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  vite: {
    plugins: [tailwindVite()]
  },
  integrations: [db()]
});