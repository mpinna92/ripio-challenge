import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head>
          {/*OpenGraph metadata*/}
          
          <meta property='og:title' content='Maxi Pinna | Ripio challenge' />
          <meta property='og:description' content='Challenge técnico para proceso de selección en Ripio' />
          <meta property='og:url' content='' />
          <meta property='og:type' content='' />
          <meta property='og:site_name' content='Maxi Pinna | Ripio challenge' />
          <meta property='og:image' content='' />

          {/* Favicon */}
          <meta name='msapplication-TileColor' content='#6d07e6' />
          <meta name='theme-color' content='#6d07e6' />

          {/* Google font */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&display=swap' rel='stylesheet' />
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
