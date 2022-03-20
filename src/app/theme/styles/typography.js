import { css } from 'styled-components';

const typography = css`
  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme: { colors } }) => colors.backgroundPrimary};
    color: ${({ theme: { colors } }) => colors.textPrimary};
    font-size: 16px;
  }

  code {
    font-family: Consolas, monospace;
  }

  a {
    color: ${({ theme: { colors } }) => colors.textPrimary};
  }
`;

export { typography };
