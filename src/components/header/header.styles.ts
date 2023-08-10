import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

import { Direction } from './header.types';

export const headerStyles =
  (scrollDirection: Direction) =>
  ({ breakpoint, color, font, spacing }: ITheme) =>
    css`
      background-color: white;
      color: ${color.text.primary};
      font-size: ${font.size.lg};
      font-weight: ${font.weight.md};
      height: 40px;
      line-height: 40px;
      padding-left: ${spacing.lg};
      padding-right: ${spacing.lg};
      position: sticky;
      top: 0;
      transition: all 0.3s ease;
      z-index: 10;

      ${scrollDirection === Direction.DOWN &&
      `
        top: -40px;

        ${
          breakpoint.md &&
          `
          top: -64px;
        `
        }
      `}

      .logo {
        display: none;

        ${breakpoint.md &&
        `
          align-items: center;
          display: flex;
        `}
      }

      ${breakpoint.md &&
      `
        height: 64px;
        line-height: 64px;
        padding-left: ${spacing.xxl};
        padding-right: ${spacing.xxl};
      `}

      .sandwich-button {
        cursor: pointer;
        color: ${color.text.primary};
        font-size: ${font.size.lg};

        &:hover {
          color: ${color.text.secondary};
        }
      }

      .external-links {
        text-align: right;

        .link-icon {
          color: ${color.text.primary};
          font-size: ${font.size.lg};
          margin-right: ${spacing.md};

          &:last-of-type {
            margin-right: 0;
          }

          &:hover {
            color: ${color.text.secondary};
          }

          ${breakpoint.sm &&
          `
            font-size: ${font.size.xl};
            margin-right: ${spacing.lg};
          `}
        }
      }
    `;

export const drawerHeaderStyles = {
  padding: '4px 20px 0 16px',
};

export const closeIconStyles = ({ color, font }: ITheme) => css`
  color: ${color.text.primary};
  font-size: ${font.size.xl};

  &:hover {
    color: ${color.text.secondary};
  }
`;
