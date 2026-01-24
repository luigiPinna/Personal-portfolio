import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../themes/default';
import { useTheme } from '../contexts/ThemeContext';
import GlobalStyles from './globals';

const Theme = ({ children }) => {
  const { theme, mounted } = useTheme();

  // Evita flash durante caricamento iniziale
  if (!mounted) {
    return (
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    );
  }

  const isDark = theme === 'dark' ||
    (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const currentTheme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;