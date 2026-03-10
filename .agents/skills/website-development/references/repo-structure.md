# Repo Structure

This monorepo contains three Astro websites and two shared packages:

```text
packages/
├── rehype/   # Shared rehype plugins (@zlliang/rehype)
└── theme/    # Shared theme package (styles, utilities, components) (@zlliang/theme)
websites/
├── www/      # zlliang.me – Personal landing page (English and Chinese)
├── tech/     # tech.zlliang.me – Tech learning and research (English)
└── days/     # days.zlliang.me – Daily life and reflections (Chinese)
scripts/      # Helper scripts for development and content workflows
```

## Website layout

`www` uses Astro i18n and keeps reusable copy fragments under `content/fragments/`.

```text
websites/www/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── utils/
└── content/
    └── fragments/
```

`tech` and `days` share the same broad structure and content model.

```text
websites/<tech|days>/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── utils/
└── content/
    ├── notes/
    └── posts/
```

## Shared packages

- `@zlliang/rehype`: shared Markdown and rehype plugins used across the sites
- `@zlliang/theme`: shared global CSS, style helpers, and Astro components

## Conventions

- Use `@/*` for `src/*` imports within a website
- Keep Astro components in PascalCase
- Keep content files under date-based directories when applicable
- Prefer shared packages when logic or styling is reused across websites
