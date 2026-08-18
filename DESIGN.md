# dot1.media · Northern Cinema (Direction B)

Phase 1 of the Dot One ecosystem redesign. The visual layer only: markup,
copy, JS behavior, SEO, the assets.js contract, and the inquiry widget all
work exactly as before.

## System
- Tailwind CSS v4, CSS-first. `src/site.css` imports Tailwind, declares the
  brand tokens in `@theme`, then layers `src/legacy.css` (the site's original
  structural CSS, extracted unchanged) and `src/northern.css` (the redesign).
- Build: `npm run build:css` compiles to `css/site.css` (committed, so the
  site stays a zero-build static deploy on Vercel).
- Tokens: page charcoal #14120d family, bone text #f2ede2, crimson #b81616
  (the news mark, the shirt, the cross), gold #c9a24a for Theopoetecology.
- Type: Fraunces carries the display voice (headings, .h-serif italic for the
  reflective registers). Archivo body, IBM Plex Mono labels. Bodoni Moda is
  reserved for print and merch.

## The one deliberate exception
`#photography` is a bright, airy island inside the dark film: the section
re-scopes the CSS variables to warm paper, dark ink, and the photography
blue #2f74c0, and the gallery renders as white-framed prints. Brittany's
section carries the light.

## Notes for future edits
- assets.js remains portal-managed; do not hand-edit. The contact logo asset
  is a black mark, rendered bone on dark via CSS invert.
- The widget (#d1w-*) posts to portal.dot1.media/api/inquiries; only its
  skin changed.
- Edit src/northern.css for design changes, then rebuild css/site.css.
