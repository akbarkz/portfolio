import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

export const headerOptionsStyles = ({ breakpoint, color, font, spacing }: ITheme) => css`
  align-items: left;
  display: flex;
  flex-direction: column;
  height: 100%;

  ${breakpoint.md &&
  `
    align-items: center;
    flex-direction: row;
  `}

  .page-link {
    color: ${color.text.primary};
    font-size: ${font.size.xl};
    margin-bottom: ${spacing.md};
    margin-right: 0;

    ${breakpoint.md &&
    `
      margin-bottom: 0;
      margin-right: ${spacing.md};
    `}

    &:hover {
      color: ${color.text.secondary};
    }
  }
`;
