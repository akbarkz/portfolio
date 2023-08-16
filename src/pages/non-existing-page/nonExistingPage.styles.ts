import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

export const wrapperStyles = ({ breakpoint, color, font }: ITheme) => css`
  align-items: center;
  display: flex;
  flex-direction: column;

  .no-page-image {
    width: 100%;

    ${breakpoint.sm &&
    `
      width: 500px;
    `}
  }

  .no-page-text {
    color: ${color.text.primary};
    font-size: ${font.size.xl};
    font-weight: ${font.weight.lg};
  }
`;
