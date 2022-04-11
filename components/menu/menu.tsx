import React from 'react';
import Link from "next/link";
import { PATHS } from 'config';
import { AnimatePresence, motion } from 'framer-motion'


import {
  MenuContainer,
  BrandWrapper,
  BranImg
} from './menu.styles';

const easing = [0.6, -0.05, 0.01, 0.99]
const fadeInUp = {
  initial: {
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: easing
    }
  }
}

export const Menu = ({ }) => {
  return (
    <AnimatePresence>
      <MenuContainer
        as={motion.div}
        initial='initial'
        animate='animate'
        exit={{ opacity: 0 }}
      >
        <BrandWrapper
          as={motion.div}
          variants={fadeInUp}
        >
          <Link href={PATHS.ROOT}><a>
            <BranImg src='/images/brand.svg' />
          </a></Link>
        </BrandWrapper>
      </MenuContainer>
    </AnimatePresence>
  );
};