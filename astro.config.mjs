// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://funmath.tools',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    tailwind(),
    sitemap(),
  ],

  output: 'static',
  adapter: cloudflare()
});