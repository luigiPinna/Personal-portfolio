import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import sharp from 'sharp';

const ROOT = path.resolve(process.cwd());
const FONTS_DIR = path.join(ROOT, '.cache', 'fonts');
const OUT_DIR = path.join(ROOT, 'public');
const OUT_FILE = path.join(OUT_DIR, 'og.png');

fs.mkdirSync(FONTS_DIR, { recursive: true });
fs.mkdirSync(OUT_DIR, { recursive: true });

async function fetchGoogleFontTTF(filename, cssQuery) {
  const fp = path.join(FONTS_DIR, filename);
  if (fs.existsSync(fp)) return fs.readFileSync(fp);

  const cssUrl = `https://fonts.googleapis.com/css2?family=${cssQuery}&display=swap`;
  const cssRes = await fetch(cssUrl, { headers: { 'User-Agent': 'Mozilla/4.0' } });
  if (!cssRes.ok) throw new Error(`Font CSS ${filename}: ${cssRes.status}`);
  const css = await cssRes.text();
  const m = css.match(/url\((https:\/\/[^)]+\.ttf)\)/);
  if (!m) throw new Error(`No TTF URL for ${filename}`);
  const ttfRes = await fetch(m[1]);
  const buf = Buffer.from(await ttfRes.arrayBuffer());
  fs.writeFileSync(fp, buf);
  return buf;
}

const [sans, serifItalic, mono] = await Promise.all([
  fetchGoogleFontTTF('SpaceGrotesk-Medium.ttf', 'Space+Grotesk:wght@500'),
  fetchGoogleFontTTF('Newsreader-Italic.ttf',   'Newsreader:ital,wght@1,400'),
  fetchGoogleFontTTF('JetBrainsMono-Regular.ttf', 'JetBrains+Mono:wght@400'),
]);

const C = {
  bg: '#f3efe8',
  ink: '#15140f',
  inkSoft: '#4a4740',
  inkMute: '#8a877e',
  line: '#d8d2c5',
  accent: '#c3402c',
};

const flexCol = { display: 'flex', flexDirection: 'column' };
const flexRow = { display: 'flex', flexDirection: 'row', alignItems: 'center' };

const h = (type, props = {}, ...children) => ({
  type,
  props: {
    ...props,
    children: children.length === 0 ? undefined : children.length === 1 ? children[0] : children,
  },
});

const tree = h('div', {
  style: {
    ...flexCol,
    width: '1200px',
    height: '630px',
    backgroundColor: C.bg,
    padding: '72px 80px',
    fontFamily: 'Sans',
    color: C.ink,
  },
},
  // Top badge row
  h('div', {
    style: {
      ...flexRow,
      gap: '14px',
      fontFamily: 'Mono',
      fontSize: '20px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: C.inkMute,
    },
  },
    h('div', { style: { color: C.accent, fontSize: '18px' } }, '●'),
    h('div', {}, 'Portfolio · v6 · 2026'),
    h('div', { style: { color: C.line } }, '/'),
    h('div', {}, 'luigipinna'),
  ),

  // Heading block
  h('div', {
    style: {
      ...flexCol,
      marginTop: '52px',
      fontSize: '78px',
      fontWeight: 500,
      lineHeight: 1.02,
      letterSpacing: '-0.035em',
    },
  },
    h('div', { style: flexRow },
      h('div', {}, 'Software '),
      h('div', { style: { fontFamily: 'Serif', fontStyle: 'italic', fontWeight: 400, color: C.accent } }, 'engineer'),
    ),
    h('div', { style: { ...flexRow, marginTop: '8px' } },
      h('div', {}, 'building things '),
      h('div', { style: { fontFamily: 'Serif', fontStyle: 'italic', fontWeight: 400, color: C.accent } }, 'that ship.'),
    ),
  ),

  // Spacer that pushes footer down
  h('div', { style: { flexGrow: 1 } }),

  // Stack line
  h('div', {
    style: {
      fontFamily: 'Mono',
      fontSize: '20px',
      color: C.inkSoft,
      letterSpacing: '0.04em',
    },
  }, 'FastAPI  ·  React  ·  Claude  ·  OpenAI'),

  // Divider
  h('div', {
    style: {
      height: '1px',
      backgroundColor: C.line,
      marginTop: '20px',
      marginBottom: '20px',
    },
  }),

  // Footer row
  h('div', {
    style: {
      ...flexRow,
      justifyContent: 'space-between',
      fontFamily: 'Mono',
      fontSize: '18px',
      color: C.inkMute,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
    },
  },
    h('div', { style: { color: C.ink } }, 'Luigi Pinna'),
    h('div', {}, 'luigipinna.com  ·  Cagliari, Italy'),
  ),
);

let svg;
try {
  svg = await satori(tree, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Sans',  data: sans,        weight: 500, style: 'normal' },
      { name: 'Serif', data: serifItalic, weight: 400, style: 'italic' },
      { name: 'Mono',  data: mono,        weight: 400, style: 'normal' },
    ],
  });
} catch (e) {
  console.error('satori failed:', e.message);
  process.exit(1);
}

await sharp(Buffer.from(svg)).png().toFile(OUT_FILE);
console.log(`✓ Wrote ${path.relative(ROOT, OUT_FILE)}`);
