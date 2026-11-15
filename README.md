# personal-site

Steven Seguinot's portfolio and writing site. It is a static site built with [Astro](https://docs.astro.build) 7.

## Run locally

```sh
npm install
npm run dev          # http://localhost:4321 (drafts visible)
npm run build        # static output in dist/ (drafts excluded)
npm run preview      # serve dist/ locally
npx astro check      # type-check
```

## Write a new entry

```sh
./new-post.sh writeup "Hunting encoded PowerShell with KEV context"
./new-post.sh blog    "What incident command taught me"
./new-post.sh journal "Week 46: homelab and n8n"
```

The script creates `src/content/posts/<slug>.md` from `templates/<type>.md` with `draft: true` and today's date. Write the entry, fill in `description`, then set `draft: false` to publish it.

Frontmatter (validated in `src/content.config.ts`; the build fails on mistakes):

| Field | Required | Notes |
|---|---|---|
| `title` | yes | |
| `description` | yes | Used in lists, the RSS feed, and link previews |
| `pubDate` | yes | `YYYY-MM-DD` |
| `updatedDate` | no | Shown as "updated …" |
| `type` | yes | `writeup`, `blog`, or `journal` |
| `tags` | no | e.g. `[detection-engineering, splunk]` |
| `draft` | no | `true` = dev server only |

Write-ups with three or more `##`/`###` headings get an automatic "On this page" table of contents. Code blocks are syntax-highlighted and follow light/dark mode. `.mdx` files also work if you need components.

## Where things live

| What | File |
|---|---|
| Name, summary, experience, certifications, links | `src/data/profile.ts` |
| Site title, description, entry types | `src/consts.ts` |
| Colors and typography (light and dark tokens) | `src/styles/global.css` |
| Pages | `src/pages/` (`/`, `/about/`, `/writing/`, `/writing/<type>/`, `/posts/<slug>/`, `/tags/<tag>/`, `/rss.xml`) |

## Privacy note

If this repo is public, drafts are public too. `draft: true` keeps an entry off the built site, but anyone can still read the Markdown in the repo. Keep private journal entries out of the repo until they're ready.

## Deploying

Not set up yet. `site` in `astro.config.mjs` is currently `https://witchkingsteven.github.io`; change it if you use a custom domain.
