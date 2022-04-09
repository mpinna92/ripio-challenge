import React from 'react';
import Head from 'next/head'
import { Layout, Container } from 'components/layout';
import Link from "next/link";

const Home = ({ }) => {

  /* Handle principal value*/
  const [value, setValue] = React.useState<string>();
  const [errorInput, setErrorInput] = React.useState<string>();

  const checkValue = (v: string) => {
    v === '' && setErrorInput('Ey! No escribiste nada...')
  }

  React.useEffect(() => {
    value != '' && setErrorInput('')
  }, [value])

  return (
    <Layout>
      <Head>
        <title>Maxi Pinna | Ripio challenge</title>
      </Head>
      <Container>

        <input
          value={value}
          onChange={e => {
            setValue(e.target.value.replace(/\s/g, ''))
          }}
          style={{
            width: '400px',
            height: '50px',
            border: '1px solid black',
            color: 'black',
            margin: '20px 0'
          }}
        />
        {!value
          ? <button onClick={() => checkValue(value ?? '')}>Go!</button>
          : <Link href={`/loading/request?data=${value}`}><a>Go!</a></Link>
        }


        <br />
        {errorInput}

      </Container>
      <br />
      0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce
      <br /><br />
    </Layout >
  )
}



export default Home;
