import React from 'react';
import Link from "next/link";
import { PATHS } from 'config';

import {
  MenuContainer,
  BrandWrapper,
  BranImg
} from './menu.styles';

export const Menu = ({ }) => {
  return (
    <MenuContainer>
      <BrandWrapper>
        <Link href={PATHS.ROOT}><a>
          <BranImg src='/images/brand.svg' />
        </a></Link>
      </BrandWrapper>
    </MenuContainer>
  );
};