import React from 'react';
import { Global as GlobalStyling } from '@emotion/react';

import { Footer } from 'components/footer';
import { Menu } from 'components/menu';

import {
  LayoutWrapper, GlobalStyles, Gradient, Content
} from './layout.styles';

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
      <LayoutWrapper>
        <Gradient />
        <Content>
          <GlobalStyling styles={GlobalStyles} />
          <Menu />
          {children}
          <Footer />
        </Content>
      </LayoutWrapper>
  );
};
