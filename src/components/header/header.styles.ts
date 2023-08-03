import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

export const headerStyles = ({ breakpoint, color, font, spacing }: ITheme) => css`
  background-color: white;
  color: ${color.text.primary};
  font-size: ${font.size.lg};
  font-weight: ${font.weight.md};
  padding-left: ${spacing.lg};
  padding-right: ${spacing.lg};

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
    font-size: ${font.size.lg};
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

export const drawerHeaderStyles = {
  padding: '28px 0 18px 16px',
};

export const closeIconStyles = ({ color, font }: ITheme) => css`
  color: ${color.text.primary};
  font-size: ${font.size.xl};

  &:hover {
    color: ${color.text.secondary};
  }
`;
