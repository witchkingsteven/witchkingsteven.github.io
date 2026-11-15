// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Final public URL. Change this if you use a custom domain.
	site: 'https://witchkingsteven.github.io',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			// Code blocks follow the reader's light/dark setting (see global.css).
			themes: { light: 'github-light', dark: 'github-dark' },
			wrap: false,
		},
	},
});
