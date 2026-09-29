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

Project descriptions are based on the public GitHub profile and repository descriptions at https://github.com/thanvirdiouf, checked on 2026-09-29. No employment history, location, or credentials have been assumed. Google Fonts provides DM Sans and IBM Plex Mono; system font fallbacks keep the site usable offline. No analytics or tracking scripts are included.

All project links and content work without JavaScript. Theme and filter controls appear only when JavaScript initializes. The former `/about.html` address redirects to the new About section; unknown pages use `404.html`.
