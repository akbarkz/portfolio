import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

export const projectStyles =
  (index) =>
  ({ breakpoint, color, font, spacing }: ITheme) =>
    css`
      margin-bottom: ${spacing.xl};

      .name {
        color: ${color.text.primary};
        font-size: ${font.size.xl};
        font-weight: ${font.weight.lg};
        margin-bottom: ${spacing.sm};

        .location {
          color: ${color.text.secondary};
          font-size: ${font.size.lg};
          font-weight: ${font.weight.md};
        }
      }

      .position {
        color: ${color.text.primary};
        font-size: ${font.size.lg};
        font-weight: ${font.weight.md};
        margin-bottom: ${spacing.sm};
      }

      .dates {
        color: ${color.text.secondary};
        font-size: ${font.size.md};
        font-weight: ${font.weight.md};
        margin-bottom: ${spacing.sm};
        text-transform: capitalize;
      }

      .link {
        margin-bottom: ${spacing.md};
      }

      .stack {
        align-items: center;
        display: flex;
        flex-wrap: wrap;

        &-tech {
          margin-left: ${spacing.sm};
        }
      }

      .project-details {
        align-items: flex-top;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        ${breakpoint.md &&
        `
          flex-direction: ${index % 2 === 0 ? 'row' : 'row-reverse'};    
        `}

        .description {
          color: ${color.text.primary};
          font-family: ${font.family};
          font-size: ${font.size.lg};
          font-weight: ${font.weight.md};

          a {
            color: ${color.text.primary};

            &:hover {
              color: ${color.text.secondary};
            }
          }
        }

        .achievements {
          color: ${color.text.primary};
          font-size: ${font.size.lg};
          font-weight: ${font.weight.md};

          .achievements-item {
            margin-bottom: ${spacing.md};

            &:last-of-type {
              margin-bottom: 0;
            }
          }
        }

        .carousel {
          color: ${color.text.primary};
          width: 100%;

          ${breakpoint.sm &&
          `
            margin: ${spacing.lg} auto;
            width: 400px;
          `}

          ${breakpoint.md &&
          `
            ${index % 2 === 0 ? `margin-left: ${spacing.xxl};` : `margin-right: ${spacing.xxl};`}
            width: 350px;
          `}

          ${breakpoint.lg &&
          `
            width: 500px;
          `}

          .slick-dots li button {
            background-color: ${color.text.secondary};
          }

          .slick-dots li.slick-active button {
            background-color: ${color.text.primary};
          }
        }
      }
    `;
