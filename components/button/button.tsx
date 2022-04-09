import React from 'react';
import { classes } from 'helpers/index';
import Link from 'next/link';

import { ButtonWrapper } from './button.styles';
import { ArrowMainButton } from 'components/icons';

export interface ButtonProps {
  className?: string;
  link?: string;
  target?: string;
  onClick?: any;
}

export const Button = ({ link = '', target = '_self', className, onClick }: ButtonProps) => {
  if (onClick) {
    return (
      <ButtonWrapper className={classes(className)} onClick={onClick}>
        <ArrowMainButton />
      </ButtonWrapper>
    );
  }
  return (
    <Link href={link} passHref>
      <ButtonWrapper target={target} className={classes(className)} >
        <ArrowMainButton />
      </ButtonWrapper>
    </Link>
  );
};
