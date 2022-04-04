import { css } from 'styled-components';

const typography = css`
  body {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme: { colors } }) => colors.backgroundPrimary};
    color: ${({ theme: { colors } }) => colors.textPrimary};
    font-size: 16px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
    line-height: 1.4rem;
    letter-spacing: 0.05rem;
  }

  a {
    color: ${({ theme: { colors } }) => colors.textPrimary};
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.extraBold};
  }

  h3 {
    font-size: 1.2rem;
    line-height: 1.2rem;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.extraBold};
  }
`;

export { typography };
