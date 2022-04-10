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
  onlyText?: boolean;
  disabled?: boolean;
}

export const ButtonAlt = ({
  text,
  link = '',
  target = '_self',
  className,
  onClick,
  onlyText,
  disabled
}: ButtonAltProps) => {
  if (onClick) {
    return (
      <ButtonWrapper className={classes(className, {onlyText, disabled})} onClick={onClick}>
        {text}
      </ButtonWrapper>
    );
  }
  return (
    <Link href={link} passHref>
      <ButtonWrapper target={target} className={classes(className, {onlyText, disabled})} >
        {text}
      </ButtonWrapper>
    </Link>
  );
};
