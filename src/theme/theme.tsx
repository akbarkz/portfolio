import { ThemeProvider } from '@emotion/react';
import { Grid } from 'antd';
import React from 'react';

import { colors } from './colors';
import { fontWeights, fontsSizes } from './fonts';
import { spacing } from './spacing';
import { ITheme, IThemeProps } from './theme.types';

const { useBreakpoint } = Grid;

const Theme = ({ children }: IThemeProps) => {
  const screens = useBreakpoint();

  const theme: ITheme = {
    breakpoint: screens,
    color: colors,
    font: {
      family: 'sans-serif',
      size: fontsSizes,
      weight: fontWeights,
    },
    spacing,
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { Theme };
