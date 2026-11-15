import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { POST_TYPES, SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getPosts, postUrl } from '../lib/posts';

export async function GET(context: APIContext) {
	const posts = await getPosts();
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site!,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: postUrl(post),
			categories: [POST_TYPES[post.data.type].label, ...post.data.tags],
		})),
	});
}
