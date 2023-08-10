import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

export const wrapperStyles = ({ spacing }: ITheme) => css`
  text-align: center;

  p {
    text-align: left;
    text-indent: ${spacing.xl};
  }
`;
