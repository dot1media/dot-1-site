# Working in this repo

Read `README.md` first - it explains what this app is, its stack, and its
environment variables. This is the dot1.media marketing site.

## Conventions that matter here

- Deploys on Vercel on a push to `main`. Commits that trigger a deploy are
  authored as `contact@dot1.media`.
- This is a static site: plain HTML/CSS/JS, no build step and no framework.
- Secrets live in the Vercel project, never in the repo. Keep `.env*` out of git
  (`.env.example` is the template to copy).
- Part of the Dot One Media suite: the apps share a signed `dot1_admin` session
  cookie on `.dot1.media` and Neon Postgres. Don't break that contract.
