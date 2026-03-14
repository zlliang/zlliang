# Tag Workflow

The registry is the source of truth for active tags and tag meaning.

## Choose tags for a note

1. Read the note only after content revision is mostly finished
2. Open the relevant registry and read the candidate descriptions
3. Identify the note's primary subject
4. Pick the smallest durable set of tags
5. Prefer one anchor tag plus one or two supporting tags
6. If nothing fits, decide whether a new long-lived navigation path is warranted

## Create a new tag

1. Decide which site owns the tag: `tech`, `days`, or both
2. Add the tag to that site's registry
3. If both sites need it, add parallel entries to both registries instead of sharing runtime code
4. Use a short English slug that works in URLs
5. Use the site's own language for the display label
6. Write a precise `description` that defines the boundary
7. Keep the registry sorted
8. Build the affected site
9. Retag nearby notes if needed

## Split or redefine a tag

1. Confirm that the current tag is too broad, ambiguous, or misleading
2. Redefine the boundary in the registry first
3. Retag the clear cases
4. Avoid forced churn on borderline notes

## Migration steps

1. Identify the notes that use the changed tag or sit near the affected topic area
2. Re-read those notes against the updated registry descriptions
3. Update note frontmatter directly to canonical slugs
4. Prefer durable improvements, not churn for its own sake
5. Remove any temporary compatibility logic instead of keeping a legacy layer around
