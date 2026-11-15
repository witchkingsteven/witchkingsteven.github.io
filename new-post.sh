#!/usr/bin/env bash
# Create a new draft entry from a template.
# Usage: ./new-post.sh <writeup|blog|journal> "Post title"
set -euo pipefail

type="${1:-}"; title="${2:-}"
case "$type" in writeup|blog|journal) ;; *) echo "usage: $0 <writeup|blog|journal> \"Title\"" >&2; exit 1;; esac
[ -n "$title" ] || { echo "error: title required" >&2; exit 1; }

cd "$(dirname "$0")"
slug="$(printf '%s' "$title" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+|-+$//g')"
[ -n "$slug" ] || { echo "error: title has no usable characters" >&2; exit 1; }
file="src/content/posts/${slug}.md"
for f in "$file" "src/content/posts/${slug}.mdx"; do
  [ -e "$f" ] && { echo "error: $f already exists" >&2; exit 1; }
done
[ -f "templates/${type}.md" ] || { echo "error: templates/${type}.md missing" >&2; exit 1; }

today="$(date +%Y-%m-%d)"
# Fill title/date via ENVIRON (no sed/awk escape pitfalls); escape for a YAML double-quoted string.
TITLE="$title" TODAY="$today" awk '
  BEGIN { t = ENVIRON["TITLE"]; gsub(/\\/, "\\\\", t); gsub(/"/, "\\\"", t) }
  /^title: ""$/ && !done_t { print "title: \"" t "\""; done_t = 1; next }
  /^pubDate: YYYY-MM-DD$/ && !done_d { print "pubDate: " ENVIRON["TODAY"]; done_d = 1; next }
  { print }
' "templates/${type}.md" > "$file.tmp"
mv "$file.tmp" "$file"
echo "created $file (draft: true — set draft: false to publish)"
