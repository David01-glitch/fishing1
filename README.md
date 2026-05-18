# Classic Fishing Tales

A lightweight fishing lifestyle website — stories, bait guides, lake adventures, tackle reviews, and outdoor retirement hobbies.

Built with **React + Vite + Tailwind CSS + React Router**, served in production by a tiny **Express** server with `compression` middleware.

## Stack

- React 18
- Vite 5
- Tailwind CSS 3
- React Router DOM 6
- Express + compression (production server)

## Install

```bash
npm install
```

## Run (development)

```bash
npm run dev
```

Opens at http://localhost:5173

## Build

```bash
npm run build
```

Outputs static files to `dist/`.

## Run (production)

```bash
npm run build && npm start
```

Express serves `dist/` on the `PORT` environment variable (default `3000`).

## Deploy

### Heroku / Railway / Render
A `Procfile` and `app.json` are included. Push the repo, the platform runs `npm install`, then `npm run build` (via `postdeploy`), then `node server.js`.

### Static hosts (Netlify / Vercel)
Set the build command to `npm run build` and the publish directory to `dist`. Add a SPA fallback (`/* -> /index.html 200`).

## Project structure

```
src/
  assets/images/        Local images (hero, categories, blog, community, tutorials, fishing, lakes)
  components/           Navbar, Footer, CookieBanner, Expandable, PageHeader, CategoryPage, LegalLayout
  pages/                Home, About, Blog, Tutorials, Community, Contact, 6 category pages, Privacy, Terms, Refund, 404
  utils/analytics.js    trackEvent / trackPageView wrappers around gtag
  App.jsx               Router + layout
  main.jsx              Entry
  index.css             Tailwind directives + base styles
server.js               Express + compression production server
```

## Notes

- All images are **local** in `src/assets/images/`. No runtime external URLs.
- "Read More" / "Explore" expand inline via CSS `max-height` transitions — no new routes, no modals.
- No animation libraries (no Framer Motion). Only Tailwind transitions and CSS hover effects.
- Google Analytics (G-4J046JXWVC) is loaded in `index.html`.
- Cookie banner, Privacy, Terms, Refund pages included for ad/legal compliance.
