import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

export const headerOptionsStyles = ({ breakpoint, color, font, spacing }: ITheme) => css`
  align-items: left;
  display: flex;
  flex-direction: column;
  line-height: inherit;
  height: 100%;

  ${breakpoint.md &&
  `
    align-items: center;
    flex-direction: row;
    line-height: inherit;
    height: 100%;
  `}

  .page-link {
    color: ${color.text.primary};
    font-size: ${font.size.lg};
    font-weight: ${font.weight.md};
    margin-bottom: ${spacing.md};
    margin-right: 0;
    position: relative;
    display: flex;
    align-items: center;
    padding: ${spacing.sm} ${spacing.md};
    border-radius: ${spacing.sm};
    transition: all 0.2s ease;
    text-decoration: none;

    ${breakpoint.md &&
    `
      margin-bottom: 0;
      margin-right: ${spacing.sm};
    `}

    &.active {
      color: ${color.text.highlighted};
      background-color: ${color.ui.accentLight};
      font-weight: ${font.weight.lg};
    }

    &:hover {
      color: ${color.ui.highlighted};
      background-color: ${color.ui.accentLight};
    }

    &::before {
      border-radius: ${spacing.sm};
      bottom: 0;
      content: ' ';
      display: block;
      inset: 0 0 0 0;
      left: 0;
      right: 0;
      position: absolute;
      top: 0;
      z-index: -1;
    }
  }
`;
