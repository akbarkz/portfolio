import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

export const projectStyles =
  (index) =>
  ({ breakpoint, color, font, spacing }: ITheme) =>
    css`
      background: ${color.ui.white};
      border-radius: ${spacing.lg};
      box-shadow: 0 4px 12px ${color.ui.shadow};
      margin-bottom: ${spacing.xxxl};
      padding: ${spacing.lg};
      transition: all 0.3s ease;
      border: 1px solid ${color.ui.border};

      ${breakpoint.sm &&
      `
        padding: ${spacing.xl};
      `}

      ${breakpoint.md &&
      `
        padding: ${spacing.xl} ${spacing.xxl};
      `}

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px ${color.ui.shadow};
      }

      .name {
        color: ${color.text.primary};
        font-size: ${font.size.xl};
        font-weight: ${font.weight.xl};
        margin-bottom: ${spacing.sm};
        display: flex;
        align-items: center;
        gap: ${spacing.sm};
        flex-wrap: wrap;

        ${breakpoint.sm &&
        `
          font-size: ${font.size.xxl};
        `}

        .location {
          color: ${color.text.secondary};
          font-size: ${font.size.md};
          font-weight: ${font.weight.md};
          background: ${color.ui.accentLight};
          padding: ${spacing.xs} ${spacing.sm};
          border-radius: ${spacing.sm};
          white-space: nowrap;

          ${breakpoint.sm &&
          `
            font-size: ${font.size.lg};
          `}
        }
      }

      .position {
        color: ${color.text.highlighted};
        font-size: ${font.size.lg};
        font-weight: ${font.weight.lg};
        margin-bottom: ${spacing.sm};
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .dates {
        color: ${color.text.secondary};
        font-size: ${font.size.md};
        font-weight: ${font.weight.md};
        margin-bottom: ${spacing.lg};
        text-transform: capitalize;
        background: ${color.ui.grey};
        padding: ${spacing.sm} ${spacing.md};
        border-radius: ${spacing.sm};
        display: inline-block;
      }

      .link {
        margin-bottom: ${spacing.lg};

        a {
          color: ${color.text.highlighted};
          font-weight: ${font.weight.md};
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: all 0.2s ease;

          &:hover {
            border-bottom-color: ${color.text.highlighted};
          }
        }
      }

      .stack {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: ${spacing.sm};
        margin-bottom: ${spacing.xl};
        padding: ${spacing.md};
        background: ${color.ui.grey};
        border-radius: ${spacing.sm};

        &-tech {
          transition: transform 0.2s ease;

          &:hover {
            transform: scale(1.1);
          }
        }
      }

      .project-details {
        display: flex;
        flex-direction: column;
        gap: ${spacing.xl};

        ${breakpoint.md &&
        `
          flex-direction: ${index % 2 === 0 ? 'row' : 'row-reverse'};
          align-items: flex-start;
        `}

        .description {
          color: ${color.text.primary};
          font-family: ${font.family};
          font-size: ${font.size.lg};
          font-weight: ${font.weight.md};
          line-height: 1.7;
          flex: 1;

          ${breakpoint.md &&
          `
            flex: 1;
            margin-right: ${index % 2 === 0 ? spacing.xl : 0};
            margin-left: ${index % 2 === 0 ? 0 : spacing.xl};
          `}

          a {
            color: ${color.text.highlighted};
            text-decoration: none;
            border-bottom: 1px solid transparent;
            transition: all 0.2s ease;

            &:hover {
              border-bottom-color: ${color.text.highlighted};
            }
          }
        }

        .achievements {
          color: ${color.text.primary};
          font-size: ${font.size.lg};
          font-weight: ${font.weight.md};
          flex: 1;

          ${breakpoint.md &&
          `
            flex: 1;
            margin-right: ${index % 2 === 0 ? spacing.xl : 0};
            margin-left: ${index % 2 === 0 ? 0 : spacing.xl};
          `}

          .achievements-item {
            margin-bottom: ${spacing.md};
            padding-left: ${spacing.md};
            position: relative;

            &:last-of-type {
              margin-bottom: 0;
            }
          }
        }

        .carousel {
          border-radius: ${spacing.lg};
          overflow: hidden;
          box-shadow: 0 2px 8px ${color.ui.shadow};
          width: 100%;
          max-width: 100%;

          ${breakpoint.sm &&
          `
            margin: ${spacing.lg} auto;
            width: 100%;
            max-width: 400px;
          `}

          ${breakpoint.md &&
          `
            width: 100%;
            max-width: 350px;
            flex-shrink: 0;
          `}

          ${breakpoint.lg &&
          `
            max-width: 500px;
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
