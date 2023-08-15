import { css } from '@emotion/react';

import { ITheme } from '@theme/theme.types';

export const wrapperStyles = ({ breakpoint, color, font, spacing }: ITheme) => css`
  margin-bottom: ${spacing.xl};

  .logo {
    width: 50%;

    ${breakpoint.sm &&
    `
      margin-top: ${spacing.sm};
      width: 100%;
    `}
  }

  .university-name {
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

  .degree {
    color: ${color.text.primary};
    font-size: ${font.size.lg};
    font-weight: ${font.weight.md};
    margin-bottom: ${spacing.sm};
  }

  .period {
    color: ${color.text.secondary};
    font-size: ${font.size.md};
    font-weight: ${font.weight.md};
    margin-bottom: ${spacing.sm};
  }

  .link {
    margin-bottom: ${spacing.sm};
  }

  .thesis {
    color: ${color.text.primary};
    margin-bottom: ${spacing.md};

    &-name {
      font-style: italic;

      &-link {
        color: ${color.text.primary};
      }
    }
  }

  .description {
    color: ${color.text.primary};
    font-size: ${font.size.lg};
    font-weight: ${font.weight.md};
  }
`;
