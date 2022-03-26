import { css } from 'styled-components';

const typography = css`
  body {
    font-family: 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme: { colors } }) => colors.backgroundPrimary};
    color: ${({ theme: { colors } }) => colors.textPrimary};
    font-size: 16px;
    line-height: 1.4rem;
  }

  a {
    color: ${({ theme: { colors } }) => colors.textPrimary};
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
`;

export { typography };
