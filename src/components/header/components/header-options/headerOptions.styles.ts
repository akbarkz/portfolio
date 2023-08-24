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
    position: relative;

    ${breakpoint.md &&
    `
      margin-bottom: 0;
      margin-right: ${spacing.md};
    `}

    &.active {
      color: ${color.text.highlighted};
    }

    &:hover {
      color: ${color.ui.white};
    }

    &::before {
      background: ${color.text.highlighted};
      border-radius: 4px;
      bottom: 0;
      content: ' ';
      display: block;
      inset: 0 0 0 0;
      left: -${spacing.xs};
      right: -${spacing.xs};
      position: absolute;
      top: 0;
      transition: transform 0.3s ease;
      -webkit-transition: transform 0.3s ease;
      transform: scaleX(0);
      transform-origin: bottom right;
      z-index: -1;
    }

    &:hover::before {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;
