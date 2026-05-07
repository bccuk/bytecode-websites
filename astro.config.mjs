import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Custom domain via the CNAME file in public/.
// Site serves at the root of websites.bytecodeconsulting.com — no base path.
export default defineConfig({
  site: 'https://websites.bytecodeconsulting.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
