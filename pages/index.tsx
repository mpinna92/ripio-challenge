import React from 'react';
import Head from 'next/head'
import { Layout, Container } from 'components/layout';
import Link from "next/link";
import { GetServerSideProps } from 'next';
import { getCryptos } from 'services';

import { useRouter } from 'next/router';

const Home = ({ }) => {

  const [value, setValue] = React.useState<string>();

 

  return (
    <Layout>
      <Head>
        <title>Maxi Pinna | Ripio challenge</title>
      </Head>
      <Container>

        <input

          onChange={e => setValue(e.target.value)}
          style={{
            width: '400px',
            height: '50px',
            border: '1px solid black',
            color: 'black',
            margin: '20px 0'
          }}
        />
        {value !== '' && < Link href={`/request/${value}`} ><a>Go!</a></Link>}

      </Container>
    </Layout >
  )
}



export default Home;
