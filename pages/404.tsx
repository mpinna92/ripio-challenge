import React from 'react';
import { Layout } from 'components/layout';
import { PATHS } from 'config';

import { ButtonAlt } from 'components/buttonAlt';

import {
  ErrorContainer,
  ErrorText,
  Jesus
} from 'components/pages/error.styles';

const Error = ({ }) => {

  return (
    <Layout>
      <ErrorContainer>
          <Jesus src='/images/output-onlinegiftools.gif' />

        <ErrorText>Error <span>404</span>, página no encontrada...</ErrorText>
        <ButtonAlt link={PATHS.ROOT} text='volver al home' />
      </ErrorContainer>
    </Layout >
  )
}



export default Error;
