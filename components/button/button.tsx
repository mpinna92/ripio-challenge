import React from 'react';
import { classes } from 'helpers/index';
import Link from 'next/link';
import { motion } from 'framer-motion'


import { ButtonWrapper } from './button.styles';
import { ArrowMainButton } from 'components/icons';

export interface ButtonProps {
  className?: string;
  link?: string;
  target?: string;
  onClick?: any;
}

export const Button = ({
  link = '',
  target = '_self',
  className,
  onClick }:
  ButtonProps) => {
  if (onClick) {
    return (
      <ButtonWrapper
        as={motion.div}
        className={classes(className)}
        onClick={onClick}
        initial={{y: '-50%'}}
        animate={{y: '-50%'}}
        whileHover={{scale: 0.85,}}
        transition={{ duration: 0.3, }}
      >
        <ArrowMainButton />
      </ButtonWrapper>
    );
  }
  return (
    <Link href={link} passHref>
      <ButtonWrapper
        as={motion.div}
        target={target}
        className={classes(className)}
        initial={{y: '-50%'}}
        animate={{y: '-50%'}}
        whileHover={{scale: 0.85,}}
        transition={{ duration: 0.3, }}
      >
        <ArrowMainButton />
      </ButtonWrapper>
    </Link>
  );
};
