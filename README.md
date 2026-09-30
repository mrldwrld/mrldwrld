# Portfolio

Next.js static site for showcasing UIs, websites and apps. No database, no server.

## Run it
```
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in /out
```

## Where things live
| What | File |
|---|---|
| Your name, hero line, about text, email | `data/site.ts` |
| All 30 projects | `data/projects.ts` |
| Every style decision | `app/globals.css` |
| Home / category / project / about pages | `app/page.tsx`, `app/[type]/`, `app/work/[slug]/`, `app/about/` |

## Add a project
Add one object to `data/projects.ts`. Its page, filter tags and category listing appear automatically.

- `type`: `"ui"`, `"website"` or `"app"` — decides the frame (panel, browser, phone)
- `theme`: `bg`, `ink`, `accent` — the project page and card take on these colours
- `cover` / `screens`: put images in `public/work/<slug>/` and reference them as `/work/<slug>/cover.png`. Until then, abstract placeholder art is drawn in the project's colours.

Screenshot sizes that fit the frames: apps 1080×2280 (9:19), websites 1600×1000 (16:10), UIs 1600×1200 (4:3).

## Deploy
**Vercel:** import the repo, no settings needed.
**GitHub Pages:** push to `main`, then in repo Settings → Pages set Source to "GitHub Actions". The included workflow builds and publishes, setting the repo name as the base path.

## Tilt (gyro)

`components/Tilt.tsx` drives a subtle parallax from the phone's motion sensor, or the mouse on desktop.

- **Android:** starts automatically. No tap, nothing shown.
- **iOS:** Apple only allows sensor access after a tap, so the first tap anywhere on the page quietly asks. No button.
- **Desktop:** follows the mouse.
- **Reduced motion:** off.
- Whatever angle the phone is held at when it starts counts as neutral, and it slowly re-centres.

Both iOS and Android only expose the sensor over **HTTPS**. It won't work over a plain `http://` local-network address (e.g. `http://192.168.x.x:3000`). Test on the deployed site.

Tune strength in `globals.css` under "Tilt", or `RANGE` in `Tilt.tsx` (lower = more sensitive).
