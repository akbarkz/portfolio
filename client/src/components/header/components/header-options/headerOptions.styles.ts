import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

export const headerOptionsStyles = ({ breakpoint, color, font, spacing }: ITheme) => css`
  display: flex;
  flex-direction: column;

  ${breakpoint.md &&
  `
    flex-direction: row;
  `}

  .page-link {
    color: ${color.text.primary};
    font-size: ${font.size.lg};
    font-weight: ${font.weight.md};
    margin-bottom: ${spacing.md};
    margin-right: 0;
    padding: ${spacing.sm} ${spacing.md};
    border-radius: ${spacing.sm};
    transition: all 0.2s ease;

    ${breakpoint.md &&
    `
      margin-bottom: 0;
      margin-right: ${spacing.sm};
      padding-bottom: 0;
      padding-top: 0;
    `}

    &.active {
      color: ${color.text.highlighted};
      background-color: ${color.ui.accentLight};
      font-weight: ${font.weight.lg};
    }

    &:hover {
      background-color: ${color.ui.accentLight};
      color: ${color.ui.highlighted};
    }
  }
`;
