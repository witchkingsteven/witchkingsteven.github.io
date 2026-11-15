import { getCollection, type CollectionEntry } from 'astro:content';
import { POST_TYPES, type PostType } from '../consts';
import { tagSlug } from './tags';

export { tagSlug };

export type Post = CollectionEntry<'posts'>;

/** Published posts, newest first. Drafts are included only on the dev server. */
export async function getPosts(type?: PostType): Promise<Post[]> {
	const posts = await getCollection('posts', ({ data }) => {
		if (data.draft && import.meta.env.PROD) return false;
		return type ? data.type === type : true;
	});
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf() || a.id.localeCompare(b.id));
}

export function postUrl(post: Post): string {
	return `/posts/${post.id}/`;
}

export function typeUrl(type: PostType): string {
	return `/writing/${POST_TYPES[type].path}/`;
}


/** Rough reading time from the raw Markdown body. */
export function readingMinutes(post: Post): number {
	const words = (post.body ?? '').split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 230));
}

/** Tags grouped by slug (so "CTF" and "ctf" merge); label = most common spelling. Sorted by slug. */
export function groupTags(posts: Post[]): { slug: string; label: string; posts: Post[] }[] {
	const groups = new Map<string, { labels: Map<string, number>; posts: Post[] }>();
	for (const post of posts) {
		for (const label of post.data.tags) {
			const slug = tagSlug(label);
			const g = groups.get(slug) ?? { labels: new Map<string, number>(), posts: [] as Post[] };
			g.labels.set(label, (g.labels.get(label) ?? 0) + 1);
			if (!g.posts.includes(post)) g.posts.push(post);
			groups.set(slug, g);
		}
	}
	return [...groups]
		.map(([slug, g]) => ({
			slug,
			label: [...g.labels].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0][0],
			posts: g.posts,
		}))
		.sort((a, b) => a.slug.localeCompare(b.slug));
}
