# Luigi Pinna — Portfolio

Personal portfolio of Luigi Pinna — Software Engineer based in Cagliari, Italy.
Built with Next.js, Tailwind CSS and shadcn/ui primitives.

Live at: [luigipinna.dev](https://luigipinna.dev) (or your custom domain).

---

## Stack

- **Next.js 15** (pages router)
- **React 18**
- **Tailwind CSS** with CSS variables driving three themes (paper / dark / blueprint)
- **shadcn/ui** primitives — used only where they earn their keep:
  - `Button` for CTAs
  - `Command` / `CommandDialog` for the ⌘K palette (`cmdk` + `@radix-ui/react-dialog`)
- **next/font** (`JetBrains Mono`, `Space Grotesk`, `Newsreader`) — no Google Fonts `<link>` tags
- **next/image** for the portrait

No styled-components, no framer-motion, no react-icons.

---

## Project structure

```
portfolio-luigi/
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── jsconfig.json              # path alias "@/*" → "./src/*"
├── components.json            # shadcn config (for adding more primitives via CLI)
├── Dockerfile
├── public/
│   └── images/                # static assets (hero portrait, etc.)
└── src/
    ├── pages/
    │   ├── _app.js            # fonts, ThemeProvider, globals.css
    │   ├── _document.js
    │   └── index.js           # composes every section
    ├── styles/
    │   └── globals.css        # three themes via :root[data-theme] + base styles
    ├── lib/
    │   ├── data.js            # projects, journey, stack, contact info
    │   ├── hooks.js           # useLocalTime, useInView, smoothTo
    │   └── utils.js           # cn() helper
    └── components/
        ├── ui/
        │   ├── button.jsx     # shadcn Button (variants: default / ghost)
        │   └── command.jsx    # shadcn Command (⌘K palette)
        ├── ThemeProvider.jsx  # paper / dark / blueprint + localStorage persistence
        ├── TopBar.jsx
        ├── Hero.jsx
        ├── SectionHead.jsx
        ├── Work.jsx
        ├── Now.jsx
        ├── Journey.jsx
        ├── Stack.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── CookieBanner.jsx
        └── CommandPalette.jsx
```

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other commands

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

---

## Notes

### Themes
Themes are switched by setting `data-theme="light|dark|blueprint"` on `<html>`.
`ThemeProvider` handles the toggle and persists the choice in `localStorage`
under the `lp-theme` key.

### Tailwind colors
Every color is mapped to a CSS variable, so classes like `bg-bg`, `text-ink`,
`text-ink-mute`, `border-line` and `text-accent` automatically follow the
active theme.

### Cookie banner
`CookieBanner.jsx` is a lightweight, self-contained notice. The site uses only
essential cookies (theme preference) — no analytics or third-party scripts.
Consent is stored in `localStorage` under `lp-cookie-consent`.

### Adding shadcn components
`components.json` is preconfigured. To add more shadcn primitives:

```bash
npx shadcn@latest add tooltip
```

### Updating content
All page content lives in `src/lib/data.js` — edit the `projects`, `journey`,
`stack`, and `contact` arrays and every section updates automatically.

---

## Deployment

Optimized for [Vercel](https://vercel.com). Just import the repo and deploy —
no extra configuration required. A `Dockerfile` is also included for
container-based hosting.

---

## License

Personal project. Code is free to read and learn from; please don't republish
the design or copy as your own portfolio.
