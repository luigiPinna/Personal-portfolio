import Head from 'next/head';
import { useState } from 'react';
import TopBar from '@/components/TopBar';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Now from '@/components/Now';
import Journey from '@/components/Journey';
import Stack from '@/components/Stack';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';
import CookieBanner from '@/components/CookieBanner';

export default function Home() {
  const [cmdOpen, setCmdOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Luigi Pinna — Software Engineer</title>
        <meta
          name="description"
          content="Luigi Pinna — Software Engineer building web and AI products with FastAPI, React and OpenAI. Based in Cagliari, Italy."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <TopBar onOpenCmd={() => setCmdOpen(true)} />
      <main>
        <Hero />
        <Work />
        <Now />
        <Journey />
        <Stack />
        <Contact />
      </main>
      <Footer />
      <CommandPalette open={cmdOpen} setOpen={setCmdOpen} />
      <CookieBanner />
    </>
  );
}
