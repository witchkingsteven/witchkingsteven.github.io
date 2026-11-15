---
title: "Example write-up: structure for a detection deep dive"
description: A sample draft that shows how a technical write-up renders. Delete or replace it.
pubDate: 2026-11-14
type: writeup
tags: [detection-engineering, example]
draft: true
---

This is a **draft**. It shows on the local dev server only and is never built into the public site. Delete this file when you write your first real write-up.

## Problem

What were you trying to detect or fix, and why did it matter?

## Approach

How you approached it: data sources, assumptions, constraints.

### Detection logic

```python
def is_suspicious(event: dict) -> bool:
    """Toy example, not a real detection."""
    return event.get("process") == "powershell.exe" and "-enc" in event.get("cmdline", "")
```

| Field | Why it matters |
|---|---|
| `process` | Narrows to the binary of interest |
| `cmdline` | Encoded commands are a common evasion signal |

## Results

What fired, false-positive rate, and what you tuned.

## Lessons learned

> Keep one quote or takeaway here.
