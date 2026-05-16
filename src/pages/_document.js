import { Html, Head, Main, NextScript } from 'next/document';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>
      <body className="density-default">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
