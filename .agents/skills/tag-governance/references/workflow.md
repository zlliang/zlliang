# Tag workflow

The relevant site's registry is the source of truth for active tags and tag meanings.

## Tagging a note

1. Use this workflow only after the author has reviewed and revised the note for content
2. Open the relevant site's registry and read the candidate tags' `description` fields
3. Read the note and identify its primary subject
4. Choose the smallest set of active tags that preserves future discovery
5. Prefer one broad anchor tag plus one or two secondary tags when needed
6. If no existing active tag fits, decide whether a new long-lived navigation path is warranted

## Creating a new tag

1. Decide which site owns the tag: `tech`, `days`, or both
2. Add the tag to that site's registry file
3. If the tag belongs on both sites, add parallel entries to both registries instead of trying to share runtime code
4. Pick a short English slug that works well in URLs
5. Add the display label in the site's own language
6. Write a precise `description` that defines the tag's scope
7. Rebuild the affected website

## Splitting or redefining a tag

1. Confirm that the old tag has become too broad or ambiguous to stay useful
2. Define the new boundary in the registry before touching note frontmatter
3. Retag the notes that clearly belong to the narrower branch
4. Leave older notes on the broader tag if the split would otherwise become forced or speculative

## Retagging older notes after registry changes

1. Identify the notes that use the changed tag or sit near the affected topic area
2. Re-read those notes against the updated registry descriptions
3. Update note frontmatter directly to canonical slugs
4. Prefer durable improvements, not churn for its own sake
5. Remove any temporary compatibility logic instead of keeping a legacy layer around
