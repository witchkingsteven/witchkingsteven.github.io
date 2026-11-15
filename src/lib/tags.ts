/** Tag → URL-safe slug. Kept dependency-free so content.config.ts can import it. */
export function tagSlug(tag: string): string {
	return tag
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}
