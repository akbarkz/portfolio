import { css } from '@emotion/react';

export const headerStyles = ({ breakpoint, font }) => css`
  background-color: white;
  color: black;
  font-size: 18px;
  font-weight: 500;
  padding-left: 24px;
  padding-right: 24px;

  ${breakpoint.md &&
  `
    padding-left: 50px;
    padding-right: 50px;
  `}

  .sandwich-button {
    cursor: pointer;
  }

  .links {
    text-align: right;

    .link-icon {
      font-size: ${font.size.lg};
      margin-right: 12px;

      &:last-of-type {
        margin-right: 0;
      }

      svg {
        fill: black;
      }

      ${breakpoint.sm &&
      `
        font-size: 24px;
        margin-right: 16px;
      `}
    }
  }
`;

export const headerOptionsStyles = ({ breakpoint, font }) => css`
  align-items: left;
  display: flex;
  flex-direction: column;
  height: 100%;

  ${breakpoint.md &&
  `
    align-items: center;
    flex-direction: row;
  `}

  a {
    font-size: ${font.size.lg};
    margin-bottom: 12px;
    margin-right: 0;

    ${breakpoint.md &&
    `
      margin-bottom: 0;
      margin-right: 12px;
    `}
  }
`;
