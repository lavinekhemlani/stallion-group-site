# Stallion Group — Website

Static site for Stallion Group. No build step, no framework — plain HTML and CSS.
Published with GitHub Pages.

## How to edit

**Text and content:** open the `.html` file for the page and edit the text between the tags.
- `index.html` — homepage
- `about.html`, `values.html`, `chairman.html`, `history.html`, `leadership.html`, `foundation.html`, `contact.html`
- `businesses/*.html` — one page per division

**Design and colour:** `assets/style.css`. The palette is set at the very top in `:root` —
change `--navy`, `--deep` and `--gold` and the whole site follows.

Alternative colour directions are in `assets/theme-charcoal.css`, `theme-green.css`, `theme-oxblood.css`.
To switch the site to one, copy its contents over `assets/style.css`.

**Images:** `img/`. Replace a file with the same name and the page updates.

**Enquiry routing:** `assets/app.js` — the desks and divisions the concierge routes to.

## Editing as a team

Anyone with access can edit a file directly on github.com (pencil icon) and commit.
The live site updates within about a minute.

## Going live on the real domain

1. GoDaddy DNS → add four A records for `stalliongroup.com` pointing to
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
2. Add a `CNAME` record for `www` → `<username>.github.io`
3. In this repo: Settings → Pages → Custom domain → `stalliongroup.com` → Enforce HTTPS
4. Remove the `noindex` meta tag from every page so search engines can index it.

## Status

Draft for internal review. All pages carry `noindex` so the site cannot be found in
search while it is being reviewed.
