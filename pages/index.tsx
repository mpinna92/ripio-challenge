import React from 'react';
import Head from 'next/head'
import { classes } from 'helpers';
import { Layout } from 'components/layout';
import Link from "next/link";

import { Button } from 'components/button';
import { CopyButton } from 'components/copyButton';

import {
  HomeWrapper,
  InputContainer,
  InputWrapper,
  Input,
  InputText,
  ErrorMsg,
  TestTsxWrapper
} from 'components/pages/home.styles';

const Home = ({ }) => {

  /* Handle principal value*/
  const [value, setValue] = React.useState<string>('');
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
        <TestTsxWrapper>
          <span>
            <p>Para testear (de nada 😉)</p>
            0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce
            </span>
          <CopyButton value='0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce'></CopyButton>
        </TestTsxWrapper>

      </HomeWrapper>
    </Layout >
  )
}



export default Home;
