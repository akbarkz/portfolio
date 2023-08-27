import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

export const appStyles = css`
  max-width: 1200px;
  margin: 0 auto;
`;

export const globalStyles = ({ font }: ITheme) => css`
  body {
    margin: 0;
  }

  html,
  body,
  #root,
  #root > div {
    height: 100%;
  }

  * {
    font-family: ${font.family};
  }
`;
