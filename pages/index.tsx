import React from 'react';
import Head from 'next/head'
import { classes } from 'helpers';
import { Layout } from 'components/layout';
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from 'components/button';
import { CopyButton } from 'components/copyButton';

import {
  HomeWrapper,
  InputContainer,
  InputWrapper,
  Input,
  InputText,
  TestTsxWrapper,
  ErrorMsg,
  TestTsx
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
    <AnimatePresence>
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
          <TestTsxWrapper
            as={motion.div}

            animate={{
              y: [-40, 0],
              opacity: [0, 1]
            }}
            transition={{ duration: 0.5 }}
          >
            <TestTsx>
              <p>Usame para testear 😉</p>
              0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce
            </TestTsx>
            <CopyButton className='copy--home' value='0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce'></CopyButton>
          </TestTsxWrapper>

        </HomeWrapper>
      </Layout >
    </AnimatePresence>
  )
}



export default Home;
