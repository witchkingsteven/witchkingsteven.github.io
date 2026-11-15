export const SITE_TITLE = 'Steven Seguinot';
export const SITE_DESCRIPTION =
	'Senior Security Engineer writing about detection engineering, security automation, and incident response.';

export type PostType = 'blog' | 'journal' | 'writeup';

// `path` is the URL segment for the listing page: /writing/<path>/
export const POST_TYPES: Record<PostType, { label: string; plural: string; path: string; blurb: string }> = {
	writeup: {
		label: 'Write-up',
		plural: 'Write-ups',
		path: 'writeups',
		blurb: 'Technical deep dives: detections, automation, investigations, and lab builds.',
	},
	blog: {
		label: 'Blog',
		plural: 'Blog',
		path: 'blog',
		blurb: 'Opinions and lessons from running security operations.',
	},
	journal: {
		label: 'Journal',
		plural: 'Journal',
		path: 'journal',
		blurb: 'Shorter, informal entries: what I am building, reading, and learning.',
	},
};
