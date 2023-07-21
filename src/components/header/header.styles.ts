import { css } from '@emotion/react';

export const headerStyles = css`
  background-color: white;
  color: black;
  font-size: 18px;
  font-weight: 500;

  .sandwich-button {
    cursor: pointer;
  }

  .links {
    text-align: right;

    .link-icon {
      font-size: 18px;
      margin-right: 12px;

      &:last-of-type {
        margin-right: 0;
      }

      svg {
        fill: black;
      }

      @media (min-width: 576px) {
        font-size: 24px;
        margin-right: 16px;
      }
    }
  }
`;
