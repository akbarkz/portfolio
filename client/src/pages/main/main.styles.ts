import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

export const wrapperStyles = ({ color, font, spacing }: ITheme) => css`
  color: ${color.text.primary};
  font-size: ${font.size.lg};
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: ${spacing.xxxl} 0;

  h2 {
    font-size: ${font.size.xxxxl};
    font-weight: ${font.weight.xxl};
    margin-bottom: ${spacing.lg};
    background: linear-gradient(135deg, ${color.text.primary} 0%, ${color.text.highlighted} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  h3 {
    font-size: ${font.size.xxl};
    font-weight: ${font.weight.lg};
    color: ${color.text.secondary};
    margin-bottom: ${spacing.xxxl};
  }

  p {
    text-align: left;
    text-indent: 0;
    margin-bottom: ${spacing.xl};
    line-height: 1.8;
    font-size: ${font.size.lg};
    color: ${color.text.primary};
    background: ${color.ui.white};
    padding: ${spacing.xl};
    border-radius: ${spacing.lg};
    box-shadow: 0 2px 8px ${color.ui.shadow};
    border-left: 4px solid ${color.text.highlighted};
  }
`;
