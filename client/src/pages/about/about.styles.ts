import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

export const wrapperStyles = ({ color, font, spacing }: ITheme) => css`
  color: ${color.text.primary};
  font-size: ${font.size.lg};
  max-width: 800px;
  margin: 0 auto;
  padding: ${spacing.xxxl} 0;

  h1 {
    font-size: ${font.size.xxxxl};
    font-weight: ${font.weight.xxl};
    margin-bottom: ${spacing.xxxl};
    text-align: center;
    background: linear-gradient(135deg, ${color.text.primary} 0%, ${color.text.highlighted} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
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
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 16px ${color.ui.shadow};
    }
  }
`;
