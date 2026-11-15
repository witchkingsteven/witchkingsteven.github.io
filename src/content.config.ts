import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { tagSlug } from './lib/tags';

// Every entry (blog post, journal entry, technical write-up) is one Markdown
// or MDX file in src/content/posts/. The file name becomes the URL slug.
const posts = defineCollection({
	loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		type: z.enum(['blog', 'journal', 'writeup']),
		tags: z
			.array(z.string().refine((t) => tagSlug(t) !== '', 'Tag needs at least one letter or digit (a-z, 0-9)'))
			.default([]),
		// Drafts show on the local dev server only, never in the built site.
		draft: z.boolean().default(false),
	}).superRefine((d, ctx) => {
		if (d.draft) return;
		if (!d.title.trim()) ctx.addIssue({ code: 'custom', path: ['title'], message: 'Required before publishing' });
		if (!d.description.trim())
			ctx.addIssue({ code: 'custom', path: ['description'], message: 'Required before publishing' });
	}),
});

export const collections = { posts };
