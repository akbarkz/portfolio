import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

export const appStyles = css`
  max-width: 1200px;
  margin: 0 auto;
`;

export const globalStyles = ({ color }: ITheme) => css`
  body {
    margin: 0;
  }

  * {
    font-family: sans-serif;

    a {
      &:not(:visited) {
        color: ${color.text.primary} !important;
      }

      &:hover {
        color: ${color.text.secondary} !important;
      }

      &:visited {
        color: initial;
      }
    }
  }
`;
