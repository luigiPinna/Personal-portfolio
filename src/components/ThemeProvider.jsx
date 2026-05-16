import { createContext, useContext, useEffect, useState } from 'react';

const ThemeCtx = createContext({
  theme: 'light',
  setTheme: () => {},
});

export function ThemeProvider({ children, defaultTheme = 'light' }) {
  const [theme, setThemeState] = useState(defaultTheme);

  /* hydrate from localStorage on the client */
  useEffect(() => {
    const stored = localStorage.getItem('lp-theme');
    if (stored && ['light', 'dark', 'blueprint'].includes(stored)) {
      setThemeState(stored);
    }
  }, []);

  /* push theme to the <html> attribute and persist */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('lp-theme', theme); } catch (e) {}
  }, [theme]);

  return (
    <ThemeCtx.Provider value={{ theme, setTheme: setThemeState }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export const useTheme = () => useContext(ThemeCtx);
