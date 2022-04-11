import React from 'react';
import { AnimatePresence, motion } from 'framer-motion'

import { GitHubIcon } from 'components/icons';
import { Container } from 'components/layout';

import {
  FooterContainer,
  GitHubWrapper,
  GitHubText,
  TucumanText
} from './footer.styles';

const easing = [0.6, -0.05, 0.01, 0.99]
const fadeInUp = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easing
    }
  }
}

export const Footer = () => {
  return (
    <AnimatePresence>
      <FooterContainer
        as={motion.div}
        initial='initial'
        animate='animate'
        exit={{ opacity: 0 }}
      >
        <Container className='align--center'>
          <a href='https://github.com/mpinna92/ripio-challenge' target='_blank'>
            <GitHubWrapper as={motion.div} variants={fadeInUp}>
              <GitHubIcon /><GitHubText>Ver en GitHub</GitHubText>
            </GitHubWrapper>
          </a>

          <TucumanText as={motion.div} variants={fadeInUp}>
            Hecho con <span>❤</span> desde Tucumán.
          </TucumanText>
        </Container>
      </FooterContainer>
    </AnimatePresence>
  );
};
