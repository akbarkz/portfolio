import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

export const headerStyles = ({ breakpoint, color, font, spacing }: ITheme) => css`
  background-color: white;
  color: ${color.text.primary};
  font-size: ${font.size.lg};
  font-weight: ${font.weight.md};
  padding-left: ${spacing.lg};
  padding-right: ${spacing.lg};

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
  padding: '18px 20px 10px 16px',
};

export const closeIconStyles = ({ color, font }: ITheme) => css`
  color: ${color.text.primary};
  font-size: ${font.size.xl};

  &:hover {
    color: ${color.text.secondary};
  }
`;
