import { css } from 'styled-components';

const base = css`
  *,
  :before,
  :after {
    box-sizing: border-box;
  }

  html,
  body {
    background-color: ${({ theme: { colors } }) => colors.backgroundPrimary};
  }

  body {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 ${({ theme: { spacing } }) => spacing.large};
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

export { base };
