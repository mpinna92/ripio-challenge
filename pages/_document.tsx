import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head>
          {/*OpenGraph metadata*/}

          <meta property='og:title' content='Maxi Pinna | Ripio explorer' />
          <meta property='og:description' content='Challenge técnico para proceso de selección en Ripio' />
          <meta property='og:url' content='' />
          <meta property='og:type' content='' />
          <meta property='og:site_name' content='Maxi Pinna | Ripio explorer' />
          <meta property='og:image' content='https://ripio-challenge.vercel.app/images/og_image.png' />

          {/* Favicon */}
          <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
          <link rel='manifest' href='/favicon/site.webmanifest' />
          <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#7309ff' />
          <meta name='msapplication-TileColor' content='#7309ff' />
          <meta name='theme-color' content='#7309ff' />

          {/* Google font */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        </ Head >
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
