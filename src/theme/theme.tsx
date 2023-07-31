import { ThemeProvider } from '@emotion/react';
import { Grid } from 'antd';
import React from 'react';

import { colors } from './colors';
import { fontWeights, fontsSizes } from './fonts';
import { IThemeProps } from './theme.types';

const { useBreakpoint } = Grid;

const Theme = ({ children }: IThemeProps) => {
  const screens = useBreakpoint();

  const theme = {
    breakpoint: screens,
    color: colors,
    font: {
      size: fontsSizes,
      weight: fontWeights,
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { Theme };
