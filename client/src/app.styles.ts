import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

export const appStyles = css`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`;

export const globalStyles = ({ font, color }: ITheme) => css`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${font.family};
    line-height: 1.6;
    color: ${color.text.primary};
    background-color: ${color.ui.grey};
  }

  html,
  body,
  #root,
  #root > div {
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: ${font.weight.lg};
    line-height: 1.2;
  }

  p {
    margin: 0 0 1rem 0;
  }

  a {
    color: ${color.text.highlighted};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${color.text.primary};
    }
  }

  ul,
  ol {
    margin: 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;
