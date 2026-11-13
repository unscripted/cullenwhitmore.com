# cullenwhitmore.com

Personal site of Cullen Whitmore, built with [EmDash](https://emdashcms.com) (Astro) and deployed to Cloudflare Workers with D1 (content) and R2 (media).

The previous WordPress site is archived at tag `v1.0.0-wordpress` and branch `archive/wordpress`.

## Local development

Requires Node.js 22.23.4 or later.

```bash
npm install
cp .env.example .env   # then set EMDASH_ENCRYPTION_KEY (npx emdash secrets generate)
npm run dev
```

- Site: http://localhost:4321/
- Admin: http://localhost:4321/_emdash/admin/ (first visit runs setup; register your own passkey)

Local content lives in `.wrangler/` (Miniflare D1 + R2) and is not committed.

## What's editable

| Where in admin | Controls |
| --- | --- |
| Pages > Home | Homepage heading and intro |
| Pages > About (and any other page) | Pages served at `/{slug}` |
| Posts | Writing at `/posts/{slug}`, with categories and tags |
| Projects | Cards on the homepage and `/projects`, sorted by "Sort order" |
| Menus > Primary | Header and footer navigation |
| Widgets > Footer | Footer "About" blurb |
| Settings | Site title, tagline, logo, favicon |

The content model is defined in `seed/seed.json`, applied on first setup.

## Deploy

Not deployed yet. See the migration plan for Cloudflare setup (`wrangler login`, D1/R2 creation, `npm run deploy`, custom domain).
