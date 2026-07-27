# Portfolio site

Static site, no build step. `index.html` + `styles.css` + `script.js`. Edit project content
in the `PROJECTS`, `MORE`, and `CLIENT_WORK` arrays at the top of `script.js`.

## Deploy (Vercel or Netlify, either works — no config needed)

**Vercel:** `npx vercel` from this folder, or connect the GitHub repo in the Vercel dashboard once pushed.
**Netlify:** drag this folder into [app.netlify.com/drop](https://app.netlify.com/drop), or connect the repo.

Either way — this is a static folder, so "build command" can be left blank and "publish directory" is `.`.

## Analytics (visit tracking)

Using [Plausible](https://plausible.io) — privacy-friendly, no cookie banner needed, single script tag,
works on any host (not locked to Vercel like Vercel Analytics is).

1. Sign up at plausible.io and add your domain.
2. In `index.html`, replace `REPLACE-WITH-YOUR-DOMAIN.com` in the `<script defer data-domain=...>` tag
   with your real domain.
3. Once deployed, visits show up in your Plausible dashboard.

If you'd rather use Vercel Analytics instead (only works if hosted on Vercel): remove the Plausible
script tag and follow Vercel's "Web Analytics" setup in your project dashboard — it's a one-line
script tag too, no code changes beyond that.

## Things to double check before going fully public

- **Genesis-MCP repo mismatch:** the project's own README references
  `github.com/adeoluwaadesinadboy/genesis-mcp` but the actual git remote is
  `github.com/adeoluwaadesina/genesis-mcp`. The site links to the latter — confirm that's the real one.
- **No projects have a live deployed URL yet** — every link on this page points to a GitHub repo,
  not a hosted demo. If you deploy any of these (Wingman Cloud, beat-party, groundwork, etc.) send me
  the URLs and I'll wire them in as "Live ↗" links alongside the repo links.
- TRIM and Whistler have no public repo link — TRIM is private by choice (pre-launch), Whistler's
  local git repo has no GitHub remote configured yet.
