# Luigi Pinna — Portfolio (Next.js · Tailwind · shadcn/ui)

Drop-in Next.js codebase che replica esattamente il prototipo HTML del portfolio.
Tutto è in `pages router` (come il tuo codebase attuale) e in **JavaScript** (no TypeScript), così non serve cambiare niente alla tua config base.

---

## Stack

- **Next.js 14** (pages router)
- **React 18**
- **Tailwind CSS** con CSS variables per i 3 temi (paper / dark / blueprint)
- **shadcn/ui** primitives — usati solo dove davvero servono:
  - `Button` (CTA)
  - `Command` / `CommandDialog` (palette ⌘K, basato su `cmdk` + `@radix-ui/react-dialog`)
- **next/font** (`JetBrains_Mono`, `Space_Grotesk`, `Newsreader`) — niente `<link>` a Google Fonts
- **next/image** per la foto

Niente styled-components, niente framer-motion, niente react-icons.

---

## Struttura

```
nextjs/
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── jsconfig.json              # alias "@/*" → "./src/*"
├── components.json            # config shadcn (se vuoi aggiungere altri componenti via CLI)
├── public/
│   └── images/hero_img.png    # foto già copiata
└── src/
    ├── pages/
    │   ├── _app.js            # font, ThemeProvider, globals.css
    │   ├── _document.js
    │   └── index.js           # compone tutte le sezioni
    ├── styles/
    │   └── globals.css        # 3 temi via :root[data-theme] + base
    ├── lib/
    │   ├── data.js            # progetti, journey, stack, contact
    │   ├── hooks.js           # useLocalTime, useInView, smoothTo
    │   └── utils.js           # cn() helper
    └── components/
        ├── ui/
        │   ├── button.jsx     # shadcn Button (variant: default/ghost)
        │   └── command.jsx    # shadcn Command (palette ⌘K)
        ├── ThemeProvider.jsx  # paper/dark/blueprint + persistenza
        ├── TopBar.jsx
        ├── Hero.jsx
        ├── SectionHead.jsx
        ├── Work.jsx
        ├── Now.jsx
        ├── Journey.jsx
        ├── Stack.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── CommandPalette.jsx
```

---

## Avvio rapido (progetto a sé)

Se vuoi vederlo girare subito senza toccare il tuo repo esistente:

```bash
cd nextjs
npm install
npm run dev
```

Apri `http://localhost:3000`.

---

## Come integrarlo nel tuo repo esistente

Il tuo `Personal-portfolio` ha già Next.js + `src/`. Per migrare:

### 1. Installa le dipendenze

```bash
npm install tailwindcss postcss autoprefixer \
            tailwind-merge clsx tailwindcss-animate \
            class-variance-authority \
            @radix-ui/react-slot @radix-ui/react-dialog \
            cmdk lucide-react
```

### 2. Rimuovi le dipendenze vecchie (opzionale ma consigliato)

```bash
npm uninstall styled-components framer-motion react-icons
```

### 3. Copia questi file dal mio output

| Da `nextjs/...`        | Al tuo repo             |
|------------------------|-------------------------|
| `tailwind.config.js`   | `tailwind.config.js`    |
| `postcss.config.js`    | `postcss.config.js`     |
| `jsconfig.json`        | `jsconfig.json`         |
| `components.json`      | `components.json`       |
| `src/styles/globals.css` | `src/styles/globals.css` (sovrascrive) |
| `src/lib/*`            | `src/lib/*`             |
| `src/components/*`     | `src/components/*` (sovrascrive le vecchie sezioni) |
| `src/pages/_app.js`    | `src/pages/_app.js` (sovrascrive) |
| `src/pages/index.js`   | `src/pages/index.js` (sovrascrive) |

Le immagini in `public/images/` sono già nelle posizioni giuste — non toccare la tua `public/`.

### 4. Pulisci

Cancella `src/styles/theme.js`, `src/themes/`, `src/styles/GlobalComponents/`,
e tutte le vecchie cartelle componenti che ora sono sostituite
(Hero, Projects, Technologies, ProfessionalJourney, SkillsRadar, TimeLine, Acomplishments…).
Tieni `src/constants/` solo se ti serve altrove, altrimenti elimina anche quella
(i dati sono già dentro `src/lib/data.js`).

### 5. Test

```bash
npm run dev
```

---

## Note

### Temi
Cambi tema impostando `data-theme="light|dark|blueprint"` sull'`<html>`.
Il `ThemeProvider` lo gestisce e persiste in `localStorage` (`lp-theme`).

### Tailwind colors
Tutti i colori sono mappati a CSS variables, quindi puoi usare classi tipo
`bg-bg`, `text-ink`, `text-ink-mute`, `border-line`, `text-accent` — i valori
cambiano automaticamente col tema.

### shadcn CLI
La cartella ha già `components.json` configurato. Se vuoi aggiungere altri
componenti shadcn (Dialog, Tooltip, etc.):

```bash
npx shadcn@latest add tooltip
```

### Aggiungere progetti / esperienze
Tutto è in `src/lib/data.js` — modifica gli array `projects`, `journey`, `stack`, `contact`.
I componenti riflettono le modifiche automaticamente.

---

## Cosa NON è incluso (di proposito)

- Blog (avevi una versione su `pages/blog/`; non riscritta qui — recuperala dal tuo repo)
- LanguageToggle (IT/EN) — non era nel prototipo. Se serve, aggiungi `next-i18next`.
- CookieBanner — se ti serve, riusabile com'è dal tuo repo vecchio.
- BackgroundAnimation — il design nuovo non ne ha bisogno.
