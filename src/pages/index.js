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
import { personLd, websiteLd } from '@/lib/jsonld';

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

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luigipinna.com/" />
        <meta property="og:title" content="Luigi Pinna — Software Engineer" />
        <meta
          property="og:description"
          content="Software engineer building things that ship — FastAPI, React, Claude, OpenAI. Based in Cagliari, Italy."
        />
        <meta property="og:image" content="https://luigipinna.com/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="luigipinna.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luigi Pinna — Software Engineer" />
        <meta
          name="twitter:description"
          content="Software engineer building things that ship — FastAPI, React, Claude, OpenAI."
        />
        <meta name="twitter:image" content="https://luigipinna.com/og.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
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
