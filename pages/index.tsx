import React from 'react';
import Head from 'next/head'
import { Layout, Container } from 'components/layout';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Maxi Pinna | Ripio challenge</title>
      </Head>
      <Container>
        Hola!
      </Container>
    </Layout>
  )
}

export default Home;
