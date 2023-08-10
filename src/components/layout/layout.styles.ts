import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

export const contentStyles = ({ breakpoint, spacing }: ITheme) => css`
  padding: ${spacing.lg};

  ${breakpoint.md &&
  `
    padding: ${spacing.xl} ${spacing.xxl};
  `}
`;
