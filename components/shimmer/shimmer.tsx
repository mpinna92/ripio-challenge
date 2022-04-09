import React from 'react';
import { classes } from 'helpers';

import {
  ShimmerEffect
} from './shimmer.styles';

export interface ShimmerProps {
  width?: number;
  height?: number;
  //'circle' | 'text h1' | 'text h2' | 'text caption' | 'tag' | 'button | img'
  variant?: string;
  //'light' for default | 'dark'
  theme?: string; 
}

export const Shimmer = ({ width, height, variant, theme }: ShimmerProps) => {
  return (
    <ShimmerEffect style={{ width: `${width}px`, height: `${height}px`}} 
    className={classes(variant, theme)} />
  );
};
