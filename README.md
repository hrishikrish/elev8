# Elev8 by Hrishi — Website

Multilingual English tutoring landing page (ES / PT / EN).  
Built with React 18 + Vite + Tailwind CSS + shadcn/ui.

---

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## Build for production

```bash
npm install
npm run build
# Output goes to ./dist/
```

Preview the production build locally:
```bash
npm run preview
```

No `.env` file needed — all content is hardcoded in the source.

---

## Deploy

### Option A — Netlify (recommended, free)

Drag-and-drop the `dist/` folder at https://app.netlify.com/drop — live in 30 seconds.

Or for auto-deploy on every git push:
1. Push this folder to a GitHub repo
2. Netlify → Add new site → Import from Git
3. `netlify.toml` is already configured — just click **Deploy**

### Option B — Vercel (free)

1. Push to GitHub
2. vercel.com → New Project → Import
3. Framework: **Vite** — auto-configured
4. Deploy

### Option C — Cloudflare Pages (free, fastest CDN)

1. Push to GitHub
2. Cloudflare Dashboard → Pages → Create a project
3. Build command: `npm run build` | Output directory: `dist`

---

## Project structure

```
src/
  pages/
    Home.jsx              # Main page — assembles all sections
  components/
    sections/             # Hero, About, CoursesPricing, WhyChoose, Payment, Contact, Footer
    shared/               # Navbar, FloatingWhatsApp, CTAButton
    ui/                   # shadcn/ui primitives
  lib/
    LanguageContext.jsx   # All ES / PT / EN copy lives here
    query-client.js       # React Query setup
```

## Editing content

All copy is in `src/lib/LanguageContext.jsx`. Search for the section key (e.g. `hero`, `pricing`, `why`) to find any text.

Pricing, WhatsApp number, payment links, and social URLs are hardcoded in the relevant section components under `src/components/sections/`.
