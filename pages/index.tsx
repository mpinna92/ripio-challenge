import React from 'react';
import Head from 'next/head'
import { classes } from 'helpers';
import { Layout } from 'components/layout';
import Link from "next/link";


import {
  HomeWrapper,
  InputContainer,
  InputWrapper,
  Input,
  InputText,
  ErrorMsg
} from 'components/pages/home.styles';
import { Button } from 'components/button';

const Home = ({ }) => {

  /* Handle principal value*/
  const [value, setValue] = React.useState<string>('0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce');
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
        <title>Maxi Pinna | Ripio Explorer</title>
      </Head>

      <HomeWrapper>

        <InputContainer>
          <InputText>Encuentra las transacciones de una dirección...</InputText>
          <InputWrapper>
            <Input
              className={classes({ active: !!value })}
              placeholder='Dirección...'
              value={value}
              onChange={e => {
                setValue(e.target.value.replace(/\s/g, ''))
              }}
            />
            {!value
              ? <Button className='main--button' onClick={() => checkValue(value ?? '')} />
              : <Button className='main--button' link={`/loading/request?data=${value}`} />
            }
          </InputWrapper>

          <ErrorMsg className={classes({ show: !!errorInput })}>{errorInput}</ErrorMsg>

        </InputContainer>

      </HomeWrapper>
    </Layout >
  )
}



export default Home;
