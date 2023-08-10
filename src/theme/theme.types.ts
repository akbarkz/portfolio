import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

export interface IThemeProps {
  children: ReactJSXElement;
}

interface IBreakpoint {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
}

export interface IColor {
  text: {
    primary: string;
    secondary: string;
    highlighted: string;
  };
}

export interface IUniversalStyle {
  xs?: string;
  sm: string;
  md: string;
  lg: string;
  xl?: string;
  xxl?: string;
}

export interface IFont {
  size: IUniversalStyle;
  weight: IUniversalStyle;
}

export interface ITheme {
  breakpoint: IBreakpoint;
  color: IColor;
  font: IFont;
  spacing: IUniversalStyle;
}
