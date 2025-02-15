import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

export const wrapperStyles = ({ color, font, spacing }: ITheme) => css`
  color: ${color.text.primary};
  font-size: ${font.size.lg};
  text-align: center;

  p {
    text-align: left;
    text-indent: ${spacing.xl};
  }
`;
