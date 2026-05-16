/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:           'var(--bg)',
        'bg-2':       'var(--bg-2)',
        ink:          'var(--ink)',
        'ink-soft':   'var(--ink-soft)',
        'ink-mute':   'var(--ink-mute)',
        line:         'var(--line)',
        'line-strong':'var(--line-strong)',
        accent:       'var(--accent)',
        'accent-soft':'var(--accent-soft)',
        panel:        'var(--panel)',
      },
      fontFamily: {
        mono:  ['var(--font-mono)',  'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans:  ['var(--font-sans)',  'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      maxWidth: {
        shell: '1240px',
      },
      keyframes: {
        pulse: {
          '0%':   { boxShadow: '0 0 0 0 var(--accent)', opacity: 1 },
          '70%':  { boxShadow: '0 0 0 8px transparent', opacity: 0.9 },
          '100%': { boxShadow: '0 0 0 0 transparent',   opacity: 1 },
        },
      },
      animation: {
        pulse: 'pulse 2.4s ease-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
