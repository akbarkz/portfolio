import { css } from '@emotion/react';

export const appStyles = css`
  max-width: 1200px;
  margin: 0 auto;
`;

export const globalStyles = ({ spacing }) => css`
  body {
    margin: 0;
  }

  * {
    font-family: sans-serif;
  }
`;
