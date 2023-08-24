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

  * {
    font-family: ${font.family};
  }
`;
