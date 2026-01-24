module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme
        'dark-bg': '#0a0a0f',
        'dark-bg-secondary': '#16161f',
        'dark-bg-tertiary': '#1f1f2e',
        'dark-text': '#e4e4e7',
        'dark-text-secondary': '#a1a1aa',
        // Light theme
        'light-bg': '#ffffff',
        'light-bg-secondary': '#f9fafb',
        'light-bg-tertiary': '#f3f4f6',
        'light-text': '#18181b',
        'light-text-secondary': '#52525b',
        // Accents
        'accent-purple': '#8b5cf6',
        'accent-cyan': '#06b6d4',
        'accent-green': '#10b981',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'gradient': 'gradient-shift 3s ease infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
