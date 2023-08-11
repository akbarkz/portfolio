import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

export const footerStyles = ({ breakpoint, font, spacing }: ITheme) => css`
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: ${font.size.lg};
  font-weight: ${font.weight.md};
  padding-left: ${spacing.lg};
  padding-right: ${spacing.lg};

  ${breakpoint.md &&
  `
    padding-left: ${spacing.xxl};
    padding-right: ${spacing.xxl};
  `}
`;

export const dividerStyles = css`
  margin-bottom: 0;
`;
