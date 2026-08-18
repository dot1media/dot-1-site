# dot1.media · Editorial Slate (Direction C, full rebuild)

Branch `redesign-c`. Unlike the Direction B branch (a re-tokened reskin), this
is a rebuilt page: new chrome, new hero, new interaction patterns, with every
word of the site's copy and every JS contract carried over intact.

## New architecture
- Masthead: press-style two-row header with the wordmark, a live dateline, a
  boxed Start a project CTA, and a numbered section nav with scrollspy.
- Reading progress bar and a right-hand index rail (desktop) that tracks the
  reader through the page.
- Rebuilt hero: ruled overline, an oversized Fraunces headline, standfirst row
  with the rotator, and a captioned, ruled hero frame.
- Photography light table: a bright white island for Brittany's work with
  category filter chips (fed by the same portal-managed SITE_ASSETS.photos),
  a scroll-snap strip of framed prints, arrows, and a live counter.
- News lens tabs: the four-lens model as an interactive tab strip with an
  animated ring dial and keyboard support.
- The Turning rendered as an ink slab: drop cap, ledger rows, full-contrast
  manifesto treatment.
- Full-screen editorial mobile menu; section numbering via CSS counters.

## System
- Tailwind v4 CSS-first: src/site-c.css imports tokens, src/legacy.css (the
  original structural CSS for reused inner sections), and src/slate.css (the
  Editorial Slate system). Compiled to css/slate.css, committed.
- Tokens: cool paper #f7f6f3, slate ink #14161a, red #e23b2e, photography blue
  #2f74c0, squared geometry, hairline rules. Fraunces display over Inter body,
  IBM Plex Mono labels.

## Contracts preserved
assets.js stays portal-managed (the light table reads the same photos array;
the legacy photo builder is switched off). All section ids, the booking CTA
data-acuity hooks, GSAP reveals, the JSON-LD, SEO head, and the message widget
(same ids and endpoint, Slate skin) are unchanged.
