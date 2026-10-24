# Thanvir Diouf — personal website

A fresh, responsive static portfolio for GitHub Pages. Built with HTML, CSS, and a small amount of vanilla JavaScript. No build step or package dependencies.

## Preview

Run `python3 -m http.server 8000` in this directory, then visit http://localhost:8000.

## Publish

Push the commit to `main`. The existing `.github/workflows/static.yml` workflow publishes the repository to GitHub Pages. In repository settings, Pages must use **GitHub Actions** as its source.

## Edit

- `index.html`: biography, project descriptions, and links.
- `assets/css/style.css`: layout, colors, responsive styles, and themes.
- `assets/js/site.js`: project filters and saved theme preference.
- `assets/favicon.svg`: site icon.

Content is based on public repositories at [GitHub](https://github.com/thanvirdiouf) and [GitLab](https://gitlab.com/thanvirdiouf), checked on **2026-10-24**. The site features 15 projects across systems, apps, desktop, tools, and research, plus 12 additional projects in the expandable workbench. Descriptions come from repository metadata, READMEs, and public file trees. See [content sources](docs/content-sources.md) for the source links and editorial notes.

No employment history, education, location, or credentials have been assumed. Google Fonts provides DM Sans and IBM Plex Mono; system font fallbacks keep the site usable offline. No analytics, tracking scripts, or runtime calls to GitHub/GitLab APIs are included. Content is stored in HTML so the site works without API tokens or platform availability.

All project links, the expandable workbench, and content work without JavaScript. Theme and filter controls appear only when JavaScript initializes. Filters apply to the 15 featured cards; the workbench is independent. The project count is derived from the cards when JavaScript initializes. When editing content, update the visible verification date and the fallback count in `index.html` too. The former `/about.html` address redirects to the new About section; unknown pages use `404.html`.
