# Dot One Media - Marketing Site

The public marketing site for **dot1.media**, the front door to Dot One Media.
It is a static site - plain HTML, CSS, and a little JavaScript - hosted on Vercel.
No build step and no framework, so it loads fast and stays easy to maintain.

## Pages and files

| File | Purpose |
|---|---|
| `index.html` | Home page |
| `portal.html` | Entry point to the client portal (portal.dot1.media) |
| `privacy-policy.html` | Privacy policy |
| `assets.js` | Shared site scripts |
| `images/`, `video/` | Media used across the pages |
| `Dot-One-Media-*.pdf` | Client service agreement and release/waiver forms |
| `robots.txt`, `sitemap.xml` | Search-engine surfaces |
| `vercel.json` | Hosting and header configuration |

## Editing

Open the `.html` files in any editor and change the markup directly. There is
nothing to compile. To preview locally, open a file in a browser, or serve the
folder:

```bash
npx serve .          # then visit the printed localhost URL
```

## Deploy

Hosted on Vercel; a push to `main` deploys.

## In the Dot One Media ecosystem

This repository is one of six that make up the Dot One Media suite. They are
separate apps that share conventions, a signed `dot1_admin` session cookie on
`.dot1.media`, and Neon Postgres (where a database is used). Each deploys to
Vercel on a push to `main`.

| Repository | What it is | Lives at |
|---|---|---|
| `dot-1-site` | Dot One Media marketing site (static) | dot1.media |
| `dot-1-portal` | Client portal - bookings, quotes, invoices, media review | portal.dot1.media |
| `dot-1-assets` | Equipment and software inventory / lifecycle tracking | assets.dot1.media |
| `dot-1-editorial` | Discernt newsroom - report, verify, score, publish | editorial.dot1.media |
| `dot-1-news` | Discernt app (iOS / Android / web) + Hono/tRPC backend | App Store / Expo |
| `dot-1-news-site` | Discernt public news website | discernt.dot1.media |

Commits that trigger a deploy are authored as `contact@dot1.media`.
