import { css } from '@emotion/react';

export const imageStyles = (smallImage) => css`
  ${smallImage &&
  `
    background-image: url(${smallImage});
    background-position: center;
    background-size: cover;
  `}

  .carousel-image {
    cursor: pointer;
    max-height: 100%;
    max-width: 100%;
    opacity: 0;

    &.loaded {
      opacity: 1;
      transition: opacity 0.3s ease-in;
    }
  }
`;
