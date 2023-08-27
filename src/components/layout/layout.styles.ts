import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

export const layoutStyles = css`
  height: 100%;
  min-height: 100%;
`;

export const contentStyles = ({ breakpoint, color, spacing }: ITheme) => css`
  background-color: ${color.ui.grey};
  flex: 1;
  padding: ${spacing.lg};

  ${breakpoint.md &&
  `
    padding: ${spacing.xl} ${spacing.xxl};
  `}
`;
