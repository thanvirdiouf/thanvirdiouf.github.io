# thanvirdiouf.github.io

My personal blog, hosted on GitHub Pages.

## Structure

- `index.html` — homepage, lists all posts
- `about.html` — about page
- `posts/` — individual blog posts (one `.html` file each)
- `assets/css/style.css` — shared styling
- `assets/js/` — optional JS
- `assets/images/` — images used in posts

## Adding a new post

1. Copy `posts/2026-08-26-first-post.html` to a new file, e.g. `posts/2026-09-10-my-new-post.html`.
2. Edit the title, date, and content inside it.
3. Add a link to it in `index.html` under the `<ul class="post-list">` section.
4. Commit and push — GitHub Pages will publish it automatically at
   `https://thanvirdiouf.github.io/posts/2026-09-10-my-new-post.html`.

No build step required — it's plain HTML/CSS.
