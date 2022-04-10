import React from 'react';
import { classes } from 'helpers/index';
import Link from 'next/link';

import { ButtonWrapper } from './buttonAlt.styles';

export interface ButtonAltProps {
  className?: string;
  text?: string;
  link?: string;
  target?: string;
  onClick?: any;
}

export const ButtonAlt = ({
  text,
  link = '',
  target = '_self',
  className,
  onClick
}: ButtonAltProps) => {
  if (onClick) {
    return (
      <ButtonWrapper className={classes(className)} onClick={onClick}>
        {text}
      </ButtonWrapper>
    );
  }
  return (
    <Link href={link} passHref>
      <ButtonWrapper target={target} className={classes(className)} >
        {text}
      </ButtonWrapper>
    </Link>
  );
};
