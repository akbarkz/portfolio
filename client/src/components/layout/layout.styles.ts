import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

export const layoutStyles = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const contentStyles = ({ breakpoint, color, spacing }: ITheme) => css`
  background: transparent;
  flex: 1;
  padding: ${spacing.xl} ${spacing.lg};
  position: relative;

  ${breakpoint.md &&
  `
    padding: ${spacing.xxxl} ${spacing.xxl};
  `}

  ${breakpoint.lg &&
  `
    padding: ${spacing.xxxxl} ${spacing.xxxl};
  `}
`;
