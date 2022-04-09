import { GitHubIcon } from 'components/icons';
import { Container } from 'components/layout';
import React from 'react';

import {
  FooterContainer,
  GitHubWrapper,
  GitHubText,
  TucumanText
} from './footer.styles';

export interface FooterProps {

}

export const Footer = ({ }: FooterProps) => {
  return (
    <FooterContainer>
      <Container className='align--center'>
        <a href='https://github.com/mpinna92/ripio-challenge' target='_blank'>
          <GitHubWrapper>
            <GitHubIcon /><GitHubText>Ver en GitHub</GitHubText>
          </GitHubWrapper>
        </a>

        <TucumanText>Hecho con <span>❤</span> desde Tucumán.</TucumanText>
      </Container>
    </FooterContainer>
  );
};
