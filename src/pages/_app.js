import { JetBrains_Mono, Space_Grotesk, Newsreader } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import '@/styles/globals.css';

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

const sans = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const serif = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${mono.variable} ${sans.variable} ${serif.variable}`}>
      <ThemeProvider defaultTheme="light">
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
