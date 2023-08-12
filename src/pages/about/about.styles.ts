import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

export const wrapperStyles = ({ color, font, spacing }: ITheme) => css`
  color: ${color.text.primary};
  font-size: ${font.size.lg};

  p {
    text-indent: ${spacing.xl};
  }
`;
