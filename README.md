# Ferdows Grand Hotel — Tehran

A portfolio-grade, production-quality **static** website for a fictional luxury hotel in
Tehran. Dark-and-ivory palette, antique-gold accents, Cormorant Garamond + Manrope
typography, fully **bilingual (English / Persian)** with correct **RTL** handling, and
pricing in **Iranian Rial**.

Built with **Next.js (App Router)** and exported as **pure static HTML/CSS/JS** so it runs
on GitHub Pages with zero server and zero configuration beyond a single build flag.

---

## Architectural assumptions

| Concern | Decision |
| --- | --- |
| Framework | **Next.js 14 (App Router)**, `output: "export"` → fully static site. |
| Rendering | Static generation. Pages are **server components** that render **client view components**; all localized content lives in `src/i18n/strings.js`. |
| i18n | A lightweight `LanguageProvider` (React context) with `en` / `fa`. Switching sets `document.documentElement.dir`/`lang` and persists to `localStorage`. No router per locale — one site, two languages, instant client-side toggle. |
| RTL | Achieved natively via the `dir` attribute **plus CSS logical properties** (`margin-inline`, `inset-inline`, `text-align: start`, etc.), so LTR/RTL both work without a separate stylesheet. |
| Fonts | `next/font` self-hosts **Cormorant Garamond** (display serif), **Manrope** (body sans) and **Vazirmatn** (Persian). Zero runtime CDN dependency. |
| Images | Curated Unsplash lifestyle images vendored into `public/images/` so the site is self-contained and works offline. |
| GitHub Pages | The repo lives under a sub-path (`/<repo>/`). `NEXT_PUBLIC_BASE_PATH` is read by both `next.config.mjs` (`basePath`) and the asset helper `src/lib/paths.js`, so every link and image resolves under the sub-path. A GitHub Actions workflow sets this automatically. |
| Pricing | Placeholder rates in **Iranian Rial (IRR)**, formatted per locale (`fa-IR` for Persian numerals). |
| Metadata | Static `metadata` in `layout.js`; per-page titles are applied client-side via `useSeo()` (pages are static client components). |

> If you'd prefer a different stack (e.g. Vite + React, or a multi-route i18n like `next-intl`),
> the content layer (`strings.js`, `data/rooms.js`) and the design system (`globals.css`) are
> intentionally framework-agnostic and can be lifted out as-is.

---

## Project structure

```
ferdows-grand-hotel/
├─ next.config.mjs            # static export + basePath for GitHub Pages
├─ public/
│  ├─ images/                 # vendored hotel imagery (self-contained)
│  └─ favicon.svg
└─ src/
   ├─ app/                    # routes (server wrappers + metadata)
   │  ├─ layout.js            # fonts, LanguageProvider, header/footer
   │  ├─ globals.css          # design tokens + all styling (logical props, RTL-ready)
   │  ├─ page.js              # /  (home)
   │  ├─ rooms/page.js        # /rooms
   │  ├─ rooms/[slug]/page.js # /rooms/:slug  (generateStaticParams)
   │  ├─ dining, spa, gallery, about, contact
   ├─ components/
   │  ├─ pages/               # client view components (one per route)
   │  ├─ Header, Footer, Reveal, RoomCard, GalleryView, ContactForm, CtaBand…
   ├─ contexts/LanguageContext.js  # EN/FA provider + RTL + formatter
   ├─ data/rooms.js           # room catalogue (localized copy + rates)
   ├─ hooks/useSeo.js         # per-page document titles
   ├─ i18n/strings.js         # EN/FA content dictionary
   └─ lib/paths.js            # basePath-aware asset helper
```

**Key files to adjust:**
- `src/i18n/strings.js` — all copy in both languages.
- `src/data/rooms.js` — rooms, images, amenities, prices.
- `src/app/globals.css` — the `:root` palette and type tokens.
- `src/contexts/LanguageContext.js` — language behaviour.

---

## Run locally

Requires **Node.js 18.17+** (20 recommended).

```bash
cd ferdows-grand-hotel
npm install
npm run dev
```

Open **http://localhost:3000**. (No `NEXT_PUBLIC_BASE_PATH` is set locally, so the site
serves from the root. Use the **EN / FA** toggle in the top bar to switch language and RTL.)

### Production build (local check)

```bash
npm run build
npm start        # or serve ./out with any static server
```

---

## Deploy to GitHub Pages

The repository includes `.github/workflows/deploy.yml`. It builds the static export with
`NEXT_PUBLIC_BASE_PATH="/<repo-name>"` and publishes the `out/` folder to the `gh-pages`
branch via [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages).

**One-time GitHub setup:**

1. Push this project to a GitHub repo, e.g. `yourname/ferdows-grand-hotel`.
2. In the repo: **Settings → Pages → Source → "GitHub Actions"**.
3. (Only if Pages wasn't already enabled) ensure **Actions → General → Workflow permissions**
   is set to **"Read and write permissions"** so the workflow can push the `gh-pages` branch.

That's it. On every push to `main`, the site rebuilds and deploys to:

```
https://<your-username>.github.io/ferdows-grand-hotel/
```

The workflow sets the correct `NEXT_PUBLIC_BASE_PATH` automatically from the repo name, so
**no manual configuration is needed**.

### Deploying to a different sub-path or a custom domain

- **Different repo name** → just rename the repo; the workflow picks up the name automatically.
- **`<username>.github.io` root site** (no sub-path) → remove the `NEXT_PUBLIC_BASE_PATH`
  line in the workflow (or set it empty) so the site deploys at the root.
- **Custom domain** → add a `CNAME` file to `public/` and set `NEXT_PUBLIC_BASE_PATH=""`
  (a custom domain usually serves from root).

### Deploy to other static hosts

The `out/` folder is completely static — upload it to Netlify, Vercel (static), Cloudflare
Pages, S3, etc. Set `NEXT_PUBLIC_BASE_PATH` to `""` (or your sub-path) before `npm run build`.

---

## Nice-to-have notes

- **Currency:** prices are illustrative IR amounts. Swap them in `src/data/rooms.js`.
- **Map:** the contact page embeds a keyless Google Maps iframe centred on Ferdowsi Ave,
  Tehran. Replace `MAP_SRC` in `src/components/pages/ContactPage.js` with a custom `output=embed`
  URL or your Google Maps embed code.
- **Enquiries:** the contact form is front-end only (shows a confirmation). Wire it to a form
  backend / email service if you need submissions.
